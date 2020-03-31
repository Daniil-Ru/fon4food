FROM openjdk:11-jre-slim
VOLUME /tmp
EXPOSE 8080
COPY build/libs/backend-*.jar /app/fon4food-backend.jar
ENTRYPOINT ["java", "-jar", "/app/fon4food-backend.jar", "--server.servlet.context-path=/api", "--spring.datasource.url=jdbc:mysql://database:3306/fon4food"]

