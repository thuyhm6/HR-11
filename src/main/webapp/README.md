# HR System - Web Application Structure

## 📁 Cấu Trúc Thư Mục WAR File

```
src/main/webapp/
├── assets/                          # Static Resources
│   ├── css/                        # CSS Files
│   │   └── style.css              # Custom styles for HR system
│   ├── js/                        # JavaScript Files
│   │   └── app.js                 # Main application JavaScript
│   └── images/                    # Image Files
│       ├── logo.png              # Company logo
│       ├── icons/                # Icon files
│       └── backgrounds/          # Background images
├── WEB-INF/                       # Web Application Configuration
│   ├── classes/                   # Compiled Java Classes
│   │   └── (Generated during build)
│   ├── lib/                      # JAR Dependencies
│   │   ├── spring-boot-starter-web-3.5.5.jar
│   │   ├── mybatis-spring-boot-starter-3.0.5.jar
│   │   ├── ojdbc11.jar
│   │   └── (Other dependencies...)
│   ├── conf/                     # Configuration Files
│   │   ├── log4j2.xml           # Log4j2 logging configuration
│   │   ├── mybatis-config.xml   # MyBatis ORM configuration
│   │   ├── database.properties  # Database connection settings
│   │   └── application-context.xml # Spring application context
│   └── web.xml                   # Web application deployment descriptor
└── (Other web resources...)
```

## 🔧 Cấu Hình Files

### 1. **web.xml** - Web Application Descriptor

- Cấu hình servlet mapping
- Context parameters
- Filter configuration
- Error pages
- Security constraints

### 2. **application-context.xml** - Spring Configuration

- Data source configuration
- MyBatis integration
- Transaction management
- View resolver setup
- Component scanning

### 3. **log4j2.xml** - Logging Configuration

- Console and file appenders
- Log levels for different packages
- Log rotation settings
- Error log separation

### 4. **mybatis-config.xml** - MyBatis Configuration

- Global settings
- Type aliases
- Mapper locations
- Database ID provider
- Plugins configuration

### 5. **database.properties** - Database Settings

- Oracle connection parameters
- Connection pool settings
- Performance tuning
- Timeout configurations

## 🚀 Build và Deploy

### Build WAR File

```bash
# Clean and package
mvn clean package

# Generated WAR file location
target/HR-11-0.0.1-SNAPSHOT.war
```

### Deploy to Application Server

1. Copy WAR file to `webapps` directory
2. Start application server (Tomcat, WebLogic, etc.)
3. Access application at `http://localhost:8080/HR-11/`

### Standalone Execution

```bash
# Run as standalone application
java -jar target/HR-11-0.0.1-SNAPSHOT.war
```

## 📋 Dependencies trong WEB-INF/lib

### Core Spring Dependencies

- `spring-boot-starter-web-3.5.5.jar`
- `spring-boot-starter-tomcat-3.5.5.jar`

### Database Dependencies

- `mybatis-spring-boot-starter-3.0.5.jar`
- `ojdbc11.jar` (Oracle JDBC Driver)
- `hikaricp-5.x.x.jar` (Connection Pool)

### Utility Dependencies

- `lombok-1.x.x.jar`
- `jackson-databind-2.x.x.jar`

## 🔍 Logging Configuration

### Log Files Location

- Application logs: `logs/hr-application.log`
- Error logs: `logs/hr-error.log`
- Log rotation: Daily with 30 days retention

### Log Levels

- `com.ait.hr`: DEBUG
- `com.ait.hr.mapper`: DEBUG (SQL logging)
- `org.springframework`: INFO
- `org.hibernate`: WARN

## 🎨 Static Resources

### CSS Files

- `assets/css/style.css`: Custom styles
- Bootstrap 5.1.3 (CDN)
- Font Awesome icons (CDN)

### JavaScript Files

- `assets/js/app.js`: Main application logic
- jQuery 3.x (CDN)
- Bootstrap 5.1.3 JS (CDN)
- DataTables (CDN)

### Images

- Company logos
- UI icons
- Background images
- User avatars

## 🔐 Security Considerations

### File Permissions

- WEB-INF folder: Read-only for web server
- Classes folder: Execute permissions
- Lib folder: Read-only
- Conf folder: Read-only

### Sensitive Data

- Database credentials in `database.properties`
- Log files may contain sensitive information
- Ensure proper file permissions

## 📊 Monitoring và Maintenance

### Health Checks

- Database connectivity
- Application status
- Memory usage
- Log file sizes

### Performance Tuning

- Connection pool settings
- JVM parameters
- Log level adjustments
- Cache configurations

## 🛠️ Development Notes

### Hot Reload

- Spring Boot DevTools enabled
- Automatic restart on class changes
- LiveReload for static resources

### Debug Configuration

- Remote debugging port: 5005
- JMX monitoring enabled
- Actuator endpoints available

---

**Lưu ý**: Cấu trúc này tuân theo chuẩn WAR file của Java EE và Spring Boot. Tất cả các file cấu hình đã được tối ưu hóa cho môi trường production.
