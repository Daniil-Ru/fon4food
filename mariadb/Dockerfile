FROM mariadb

EXPOSE 3306

ENV MYSQL_ROOT_PASSWORD pass
ENV MYSQL_DATABASE fon4food

ADD 1-schema.sql /docker-entrypoint-initdb.d/
ADD 2-data.sql /docker-entrypoint-initdb.d/

