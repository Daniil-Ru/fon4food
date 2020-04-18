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

      docker-compose down --rmi all  # to remove existing docker images
      
      docker-compose up -d database

      # wait until the following command finds "ready for connections" TWICE in the db logs:
      docker-compose logs database | grep "ready for connections"
      
      docker-compose up -d mail

      # wait until the following command finds "ready for work" in the mail logs:
      docker-compose logs mail | grep "ready for work"

      # start webmailer at port 8082
      docker-compose up -d webmail

* You can now either...

  * ...develop the application, i.e. backend and frontend:

        docker-compose start database
        # develop and run both backend and frontend in your IDE
        # the frontend (ng serve) will be at http://localhost:4200 and the backend at http://localhost:8080/api
        docker-compose stop database

  * ...test the whole stack:

        docker-compose start
        # the frontend will be at http://localhost:8080 and the backend at http://localhost:8080/api
        docker-compose stop

* The following test accounts are available (Password: pass) in backend and mail server:
  * lisa@mail.fon4food (supplier)
  * anton@mail.fon4food (vendor)

* The following test accounts are available (Password: pass) only in mail server so you can test signing up new users:
  * user1@mail.fon4food
  * user2@mail.fon4food
  * user3@mail.fon4food

## Deployment

* Runtime requirements:
  * web server like apache or nginx
  * openjdk 11
  * mariadb 10

* TBD

