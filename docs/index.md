# Documentation

## Development and testing

### Setup

* Development requirements:
  * openjdk 11
  * nodejs 12, npm 6
   * Win 10 installation: https://www.techomoro.com/install-and-set-up-angular-on-windows/
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

### Data model changes

* The data model is changed by adding, modifying, or removing JPA @Entities and NOT by manually changing the database schema.
* From the difference between the data model represented by the entity classes and the current schema in the database, a database migration file is derived.
* This migration is added to the code and will be applied to the database when the backend is started, and only if it has not been applied before.

#### Development process involving model changes

Say you're working on issue #123 "Do this and that". Your development process would look like this:

1. Make sure that your working copy is on the `master` branch, that there are no local changes, and that it is in sync with the `master` branch at GitHub.
2. Create and checkout a new local branch for your feature, say `123-this-that`, e.g. by running `git checkout -b 123-this-that`.
3. Then do your development until at some point you need to make changes to the JPA @Entities in the backend.
4. Whenever you change the model follow this procedure:

   1. Stop the backend.
   2. Make your changes to the @Entities.
   3. (1st time only) Copy the master migration file `src/main/resources/db/changelog/db.changelog-master.yaml` to a temporary backup file `src/main/resources/db/changelog/db.changelog-master.yaml.bak`.
   4. Remove all the content from the master migration file `db.changelog-master.yaml` and save it.
   5. From the `backend` directory run `./gradlew diffChangeLog`. You will then find the delta migration in the master migration file you emptied before which looks like this:
   
          databaseChangeLog:
          - changeSet:
              ...
          - changeSet:
              ...
   
   6. (1st time only) Copy the master migration file `src/main/resources/db/changelog/db.changelog-master.yaml` into the subdirectory `migrations` and name it after the branch, i.e. like `src/main/resources/db/changelog/migrations/123-this-that.yaml`.
   7. (1st time only) Append another `include` block to the backup of the master migration file, i.e. to `db.changelog-master.yaml.bak`. You would append something like this:
       
          - include:
              file: migrations/123-this-that.yaml
              relativeToChangelogFile: true

   8. (from 2nd time) Copy all but the first line from the master migration file's content and append it to the included migration file `src/main/resources/db/changelog/migrations/123-this-that.yaml`.
   9. Replace the master migration file's content with the content copied from the backup file.
   10. Now you can start the backend again and it should apply the migration to the database. Then you can go on developing using the changed model.

5. For any commit you `git add`, `git commit`, and eventually `git push` your changes including the master migration file and the new migration file named after the branch. Don't add the master migration backup file to the repository.
6. When you're done developing on the branch you delete the master migration backup file `db.changelog-master.yaml.bak`.
7. After you pushed your commits to GitHub you then create a new Pull Request so someone reviews your code and merges it to the master branch.

## Deployment

* Runtime requirements:
  * web server like apache or nginx
  * openjdk 11
  * mariadb 10

* TBD

