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
### Serve allure 
- for latest reports: `mvn allure:serve`
- do clean reports, just mvn clean: `mvn clean`
### Serve docker
- for x64 `docker compose -f docker-compose.yml up`
- for arm `docker compose -f docker-compose-arm.yml up`
### Serve spring boot application
- todo
## Localhost:
- for selenium grid: `http://localhost:4444/`
- for allure it automatically opens reports
- for h2 console: todo
- for spring boot application: todo