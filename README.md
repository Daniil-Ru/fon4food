# fon4food

* Created during the Hackathon #WirVsVirusHack in 2020
* Explanatory video (German): https://youtu.be/BUNZU-Hfax8

## Exemplary procedure

* Lists of regional food suppliers etc. are published in regional newspapers and advertising papers, together with times of order acceptance and telephone numbers, source of data is the web platform
* Customer in quarantine finds his supermarket and calls at the indicated time and places his order
* Vendor puts together the delivery, determines availability and price and agrees this again with the customer, offers replacement products if necessary
* Vendor encloses the invoice with the delivery
* Vendor creates entry for delivery together with a delivery price in the web platform and receives delivery number with which he identifies the delivery (which may consist of several parts)
* Vendor selects an available supplier in the web platform or activates the delivery for suppliers for a limited time
* Supplier receives offer and can confirm or reject it, or he selects his own activated deliveries
* Supplier picks up deliveries from the vendor and delivers them to the customer
* Supplier places the delivery in front of the house or apartment door and rings the bell, then he marks the success of the delivery via his smartphone in the web platform
* If a delivery could not be delivered, the supplier returns it to the vendor
* As soon as the customer has transferred the invoice (should also be possible by telephone), the vendor transfers the agreed delivery fee to the supplier, these actions are confirmed in the web platform

## Implementation

* Prototype for the web platform, which enables the collaboration of the different roles
* Frontend: Angular
* Backend: Spring Boot

## Run in local test environment (Linux)

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
      npm install
      ng build
      docker build -t fon4food_frontend .
      cd ..

* Run docker containers:

      docker-compose up -d
      # point your browser to http://localhost:8080 to manually test the application
      docker-compose down
