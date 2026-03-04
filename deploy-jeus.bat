@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo ================================================
echo    HR-11 Build - Tao goi deploy cho JEUS 8
echo    Target: C:\tmaxsoft\jeus8\resource\HR-11
echo ================================================
echo.

:: ---- CẤU HÌNH ----
set PROJECT_DIR=%~dp0
set JAVA_HOME_JDK21=C:\Program Files\Java\jdk-21.0.10
set MVN=%PROJECT_DIR%mvnw.cmd
set EXPLODED_WAR=%PROJECT_DIR%target\exploded-war

:: ---- BƯỚC 1: Kiểm tra JDK 21 ----
if not exist "%JAVA_HOME_JDK21%\bin\java.exe" (
    echo [LOI] Khong tim thay JDK 21 tai: %JAVA_HOME_JDK21%
    echo       Sua duong dan JAVA_HOME_JDK21 trong file bat nay.
    pause
    exit /b 1
)
set JAVA_HOME=%JAVA_HOME_JDK21%
set PATH=%JAVA_HOME%\bin;%PATH%
echo [OK] Dang dung JDK:
java -version
echo.

:: ---- BƯỚC 2: Build Maven ----
echo [1/2] Building project (mvn clean package -DskipTests)...
echo.
call "%MVN%" clean package -DskipTests
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [LOI] Maven build THAT BAI. Kiem tra log o tren.
    pause
    exit /b 1
)
echo.

:: ---- BƯỚC 3: Kiểm tra exploded-war ----
if not exist "%EXPLODED_WAR%\WEB-INF" (
    echo [LOI] Khong tim thay thu muc WEB-INF trong exploded-war.
    echo       Duong dan kiem tra: %EXPLODED_WAR%
    pause
    exit /b 1
)

:: ---- THÔNG BÁO ----
echo [2/2] Build thanh cong!
echo.
echo ================================================
echo    KET QUA: Goi deploy da san sang
echo ================================================
echo.
echo Duong dan goi deploy (exploded WAR):
echo   %EXPLODED_WAR%
echo.
echo Cau truc thu muc:
echo   WEB-INF\classes\  (.class + .properties + mapper/*.xml)
echo   WEB-INF\lib\      (.jar - all dependencies)
echo   WEB-INF\view\     (.html Thymeleaf templates)
echo   WEB-INF\conf\     (database.properties, mybatis-config.xml)
echo   WEB-INF\web.xml
echo   WEB-INF\jeus-web-dd.xml
echo   assets\           (css, js, images)
echo.
echo ================================================
echo    CACH CHUYEN LEN SERVER JEUS
echo ================================================
echo.
echo 1. Copy TOAN BO NOI DUNG thu muc sau len JEUS server:
echo      TU : %EXPLODED_WAR%\*
echo      DEN: C:\tmaxsoft\jeus8\resource\HR-11\
echo.
echo 2. Tren JEUS server, dam bao thu muc ton tai:
echo      C:\tmaxsoft\jeus8\resource\HR-11\WEB-INF\
echo.
echo 3. Dang ky ung dung tren JEUS (neu chua dang ky):
echo      CMD: jeusadmin -host JEUS_HOST -port 9736
echo           deploy -path "C:\tmaxsoft\jeus8\resource\HR-11" -context /HR-11
echo.
echo    hoac qua WebAdmin: http://JEUS_HOST:9736/webadmin
echo.
echo 4. URL truy cap: http://JEUS_HOST:8080/HR-11
echo.
pause
