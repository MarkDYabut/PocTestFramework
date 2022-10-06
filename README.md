# Proof of concept test framework
## Technologies used
- Spring Boot
- Cucumber
- Junit
- Surefire
- Maven
- Allure
- Selenium
- Selenium Grid
- RestAssured
- Docker
## Commands
### Executing through mvn
- Run all tests: `mvn test`
- Run specific tag: `mvn test -Dcucumber.filter.tags=@tag`
- Run multiple tags: `mvn test -Dcucumber.filter.tags="@tag1 or @tag2"`
- Run multiple tags: `mvn test -Dcucumber.filter.tags="@tag1 and @tag2"`
- Run multiple tags: `mvn test -Dcucumber.filter.tags="(@tag1 and @tag2) or @tag3"`
- Run with override grid `mvn test -Dtest.grid.enable=false`
- Run with override parallelism `mvn test -Dcucumber.execution.parallel.enabled=false`
### Serve allure 
- for latest reports: `mvn allure:serve`
- do clean reports, just mvn clean: `mvn clean`
### Serve docker
- for x64 `docker compose -f docker-compose.yml up`
- for arm `docker compose -f docker-compose-arm.yml up`
### Serve spring boot application
- run main class `src/main/java/com/mark/PocTestFrameWork/PocTestFrameworkApplication.java`
## Localhost
- for selenium grid: `http://localhost:4444/`
- for allure it automatically opens reports
- for h2 console: `http://localhost:8080/h2-console`
- for spring boot application: `http://localhost:8080`
## Configuration Files
- `src/main/resources/application.properties`
- `src/test/resources/junit-platform.properties`
- `src/test/resources/allure.properties`
- `docker-compose.yml`
- `docker-compose-arm.yml`
## Test Engineering Files
- `src/test/resources/featurefiles`
- `src/test/java/com/mark/PocTestFrameWork/steps`
## Resource Links
- [Cucumber Junit](https://github.com/cucumber/cucumber-jvm/tree/main/cucumber-junit-platform-engine)
