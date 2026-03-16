package com.ait.config;

import java.util.Properties;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Logs MyBatis SQL template and timing without exposing parameter values.
 */
@Component
@Intercepts({
        @Signature(type = Executor.class, method = "update", args = { MappedStatement.class, Object.class }),
        @Signature(type = Executor.class, method = "query", args = {
                MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class })
})
public class SqlOnlyInterceptor implements Interceptor {

    private static final Logger logger = LoggerFactory.getLogger(SqlOnlyInterceptor.class);

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        MappedStatement mappedStatement = (MappedStatement) invocation.getArgs()[0];
        String methodName = invocation.getMethod().getName();

        BoundSql boundSql = mappedStatement.getBoundSql(invocation.getArgs()[1]);
        String sqlTemplate = boundSql.getSql().replaceAll("\\s+", " ").trim();

        if (logger.isDebugEnabled()) {
            logger.debug("=== SQL Operation ===");
            logger.debug("SQL ID: {}", mappedStatement.getId());
            logger.debug("Command Type: {}", mappedStatement.getSqlCommandType().name());
            logger.debug("SQL Template: {}", sqlTemplate);
        }

        long startTime = System.currentTimeMillis();
        Object result = invocation.proceed();
        long executionTime = System.currentTimeMillis() - startTime;

        if (logger.isDebugEnabled()) {
            if ("update".equals(methodName)) {
                if (result instanceof Integer) {
                    logger.debug("Rows affected: {}", result);
                } else {
                    logger.debug("Update operation completed");
                }
            } else if ("query".equals(methodName)) {
                if (result instanceof java.util.List) {
                    logger.debug("Rows returned: {}", ((java.util.List<?>) result).size());
                } else {
                    logger.debug("Query operation completed");
                }
            }
            logger.debug("Execution time: {} ms", executionTime);
            logger.debug("====================");
        }

        return result;
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
