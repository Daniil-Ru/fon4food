# fon4food

## Run in local test environment

* Tested with:

  * openjdk 11
  * nodejs 12, npm 6
  * angular cli 9
  * docker, docker-compose

* Build spring boot app and docker image:

      cd backend
      ./gradlew build
      docker build -t fon4food_backend .
      cd ..

* Build angular app and docker image:

      cd frontend
      ng build
      docker build -t fon4food_frontend .
      cd ..

* Run docker containers:

      docker-compose up -d
      # do testing ...
      docker-compose down

