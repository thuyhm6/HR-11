package com.ait.config;

import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Properties;

/**
 * Custom MyBatis Interceptor để chỉ log SQL statement và số lượng records
 * Không log chi tiết dữ liệu parameters và results
 */
@Component
@Intercepts({
        @Signature(type = Executor.class, method = "update", args = { MappedStatement.class, Object.class }),
        @Signature(type = Executor.class, method = "query", args = { MappedStatement.class, Object.class,
                RowBounds.class, ResultHandler.class })
})
public class SqlOnlyInterceptor implements Interceptor {

    private static final Logger logger = LoggerFactory.getLogger(SqlOnlyInterceptor.class);

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        MappedStatement mappedStatement = (MappedStatement) invocation.getArgs()[0];
        Object parameter = invocation.getArgs()[1];

        String methodName = invocation.getMethod().getName();
        String sqlId = mappedStatement.getId();
        String sqlCommandType = mappedStatement.getSqlCommandType().name();

        // Get BoundSql để lấy SQL với parameters
        BoundSql boundSql = mappedStatement.getBoundSql(parameter);
        String sqlWithParameters = getSqlWithParameters(mappedStatement, boundSql, parameter);

        // Log SQL statement info với parameters
        logger.info("=== SQL Operation ===");
        logger.info("SQL ID: {}", sqlId);
        logger.info("Command Type: {}", sqlCommandType);
        logger.info("SQL Statement: {}", sqlWithParameters);

        // Execute the original method
        long startTime = System.currentTimeMillis();
        Object result = invocation.proceed();
        long executionTime = System.currentTimeMillis() - startTime;

        // Log result info (only row count, not data)
        if ("update".equals(methodName)) {
            if (result instanceof Integer) {
                logger.info("Rows affected: {}", result);
            } else {
                logger.info("Update operation completed");
            }
        } else if ("query".equals(methodName)) {
            if (result instanceof java.util.List) {
                java.util.List<?> resultList = (java.util.List<?>) result;
                logger.info("Rows returned: {}", resultList.size());
            } else {
                logger.info("Query operation completed");
            }
        }

        logger.info("Execution time: {} ms", executionTime);
        logger.info("====================");

        return result;
    }

    /**
     * Thay thế dấu ? trong SQL bằng parameters thực tế
     */
    private String getSqlWithParameters(MappedStatement mappedStatement, BoundSql boundSql, Object parameter) {
        String sql = boundSql.getSql();
        List<ParameterMapping> parameterMappings = boundSql.getParameterMappings();

        if (parameterMappings == null || parameterMappings.isEmpty()) {
            return sql;
        }

        String sqlWithParameters = sql;

        for (int i = 0; i < parameterMappings.size(); i++) {
            ParameterMapping parameterMapping = parameterMappings.get(i);
            String propertyName = parameterMapping.getProperty();
            Object value = getParameterValue(parameter, propertyName);

            String parameterValue = formatParameterValue(value);

            // Sử dụng string replacement đơn giản thay vì regex
            // để tránh lỗi với BCrypt hash có $2 ở đầu
            int questionMarkIndex = sqlWithParameters.indexOf("?");
            if (questionMarkIndex != -1) {
                sqlWithParameters = sqlWithParameters.substring(0, questionMarkIndex) +
                        parameterValue +
                        sqlWithParameters.substring(questionMarkIndex + 1);
            }
        }

        return sqlWithParameters;
    }

    /**
     * Lấy giá trị parameter từ object
     */
    private Object getParameterValue(Object parameter, String propertyName) {
        if (parameter == null) {
            return null;
        }

        // Nếu parameter là Map (ví dụ: @Param)
        if (parameter instanceof java.util.Map) {
            return ((java.util.Map<?, ?>) parameter).get(propertyName);
        }

        // Nếu parameter là primitive hoặc String
        if (parameter instanceof String || parameter instanceof Number || parameter instanceof Boolean) {
            return parameter;
        }

        // Nếu parameter là object, thử lấy property bằng reflection
        try {
            java.lang.reflect.Field field = parameter.getClass().getDeclaredField(propertyName);
            field.setAccessible(true);
            return field.get(parameter);
        } catch (Exception e) {
            // Nếu không lấy được, trả về toString()
            return parameter.toString();
        }
    }

    /**
     * Format parameter value để hiển thị trong SQL
     */
    private String formatParameterValue(Object value) {
        if (value == null) {
            return "NULL";
        }

        if (value instanceof String) {
            String stringValue = value.toString();

            // Kiểm tra nếu là BCrypt hash (bắt đầu với $2)
            if (stringValue.startsWith("$2")) {
                // Đối với BCrypt hash, chỉ hiển thị một phần để tránh lỗi
                return "'[BCRYPT_HASH:" + stringValue.substring(0, Math.min(20, stringValue.length())) + "...]'";
            }

            // Escape single quotes cho string thông thường
            stringValue = stringValue.replace("'", "''");
            return "'" + stringValue + "'";
        }

        if (value instanceof java.util.Date) {
            return "'" + value.toString() + "'";
        }

        return value.toString();
    }

    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
        // No properties needed
    }
}
