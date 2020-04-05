# Documentation

## Development and testing

* Development requirements:
  * openjdk 11
  * nodejs 12, npm 6
  * angular cli 9
  * docker, docker-compose

* Build the backend:

      cd backend
      ./gradlew build
      cd ..

* Build the frontend:

      cd frontend
      npm install
      ng build
      cd ..

* Create the Docker containers and wait for the database to initialize:

      docker-compose down --rmi all
      docker-compose up --no-start
      docker-compose start database
      docker-compose logs database | grep "init process done"
      docker-compose stop database

You can now either...

* ...develop the application with only the database running in Docker:

      docker-compose start database
      # develop backend and frontend and run these components from your IDE
      docker-compose stop database

* ...integration test the build products by running all three containers:

      docker-compose start
      # go to http://localhost:8080 and manually test the application
      docker-compose stop

## Deployment

* Runtime requirements:
  * web server like apache or nginx
  * openjdk 11

* TBD

