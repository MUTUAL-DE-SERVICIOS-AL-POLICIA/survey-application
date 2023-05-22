# Survey applications
Application to perform service qualification

## Required

- Node v16.18.1 or older

## Initial setup
- Create env file for credentials

- Change ENV variable in development or production mode

- Get the dependencies `npm install`

## Deploy with docker
In the root of your project, run the following:

- `docker build -t survey-application .`

Verify that the image has been created

- `docker images`

Run the docker container

- `docker run -it -p 3000:3000 -v $(pwd):/survey-application --restart always survey-application`