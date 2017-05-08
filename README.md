# Description
This project contains 2 web projects which result in a simple server which serves a background image of a dish.
Both have Dockerfiles included for providing a container version of this. Those containers might be useful to just identify different containers while serving different images in the webbrowser.

The project is used to get to know different ways of serving:
- dish-bolo: Python/Flask server
- dish-schnipo: NodeJS/Express server

Both projects listen to http-requests on port 8080.

## Starting
Show Bolognese:
    docker run -d bschnorbus/dish-bolo -p 8090:8080
    
Show SchniPo:
    docker run -d bschnorbus/dish-schnipo -p 8080:8080

# Resources
- Dockerizing NodeJS Express https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- Python Flask App - https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
- Dockerizing Python Flask http://containertutorials.com/docker-compose/flask-simple-app.html
