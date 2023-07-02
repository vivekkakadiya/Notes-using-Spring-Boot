Notes Project Using Spring Boot And React
===============================

This is a simple web application that allows users to create and manage their notes. It is built using Spring Boot as the backend and React as the frontend.
<a href="https://hits.sh/github.com/vivekkakadiya/Notes-using-Spring-Boot"><img alt="Hits" src="https://hits.sh/github.com/vivekkakadiya/Notes-using-Spring-Boot.svg?label=Viewer%20Count&color=355C7D&labelColor=4083e9"/></a>

Getting Started
---------------

### Prerequisites

-   Java 17 or higher
-   Node.js and npm
-   MySQL

## Demo

https://user-images.githubusercontent.com/84114759/225833545-56d450a9-723a-4777-ace9-126e8b0732f3.mp4




### Installation

1.  Clone the repository:

    ```bash

    git clone https://github.com/your-username/spring-boot-react-notes.git
    cd spring-boot-react-notes
    ```

2.  Configure the database:

    Create a new MySQL database and update the configuration in `src/main/resources/application.properties`:

    ```bash

    spring.datasource.url=jdbc:mysql://localhost:3306/Notes/your-database-name
    spring.datasource.username=your-database-username
    spring.datasource.password=your-database-password
    ```

3.  Build the backend:

    ```bash
    cd server/Notes
    ./mvnw package
    ```
4.  Run the backend:

    ```bash

    java -jar target/Notes-0.0.1-SNAPSHOT.jar
    ```

5.  Install frontend dependencies:

    ```bash

    cd client
    npm install
    ```

6.  Run the frontend:

    ```bash

    npm start
    ```

7.  Access the application:

    Open [http://localhost:3000](http://localhost:3000/) in your web browser.

Usage
-----

-   The homepage shows a list of notes.
-   Click the "New Note" button to create a new note.
-   Click the title of a note to view or edit its contents.
-   Click the "Delete" button to delete a note.

Contributing
------------

Contributions are welcome! Please read the [contributing guidelines](https://github.com/vivekkakadiya/Notes-using-Spring-Boot) before getting started.

