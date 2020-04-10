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

* Set up the Docker images and containers:

      docker-compose down --rmi all  # to remove already existing docker images
      docker-compose up --no-start
      docker-compose start database
      docker-compose stop database

You can now either...

* ...develop the application with only the database running in Docker:

      docker-compose start database
      # develop and run both backend and frontend in your IDE
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

