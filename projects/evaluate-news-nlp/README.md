# Evaluate News Article with NLP

## Introduction
This project is a part of Udacity nano degree educational project, it makes student try out what they have learned in part one of using webpack.

At the same time this project contains front end (JavaScript & HTML) and back end (Express), the front end of this project is simple and only contains the following: -

1. Text field to enter url for news article 
2. Submit button, to submit the url to back end and then call NLP APIs.
3. Result of call

For the back end it only contains one end point that is responsible of calling API.

Also you can find test cases for the front and back end.

## Steps to run the project

It is highly recommended to fork this repo first and then clone it, after cloneing the project go to project directory and run the following

- `npm install`

This will install the dependencies mentioned in package.json

**Hint:You must have Node and nmp installed.**

To run the front end in development mode you will need to run this command which will open browser window with project front end

- `npm run build-dev`

To run the front end for production mode you will need to run this command which will create a dist folder that contains front end assets

- `npm run build-prod`

To run express back end you will need to run this command

- `npm run start`

## NLP API's

This project rely on Meaningcloud api "https://www.meaningcloud.com/developer/login", to be able to run this project successfuly you need to create your own account and then put your own API key in .env file property named API_KEY.

The back end endpoint "/sentimentData" receives url and then it will send get request to meaningcloud API's to get required data.

## Application testing
You can use the follwoing command to run application tests and the should all succeed 

- `npm run test`