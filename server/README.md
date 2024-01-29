# Data Visualization Dashboard

## Project Overview
This project is a data visualization dashboard designed to provide insights from a given dataset. The application is built using React, React Router, Chart.js, ReactChartjs2, and Redux.



## Installation
Ensure you have Node.js and npm installed on your machine.



# Navigate to the client directory
cd client

# Install dependencies
npm install


Features

    Creative data visualizations using Chart.js and ReactChartjs2.
    Interactive graphs, charts, and visuals for gaining insights.
    Filters for refining data based on various parameters.
    Integration with a MongoDB database.
    API in Node.js to retrieve data from MongoDB.

API Integration

The application communicates with a MongoDB database to fetch data through a Node.js API. Ensure the API is running and properly configured.
Filters

The dashboard includes the following filters:

    End Year
    Topics
    Sector
    Region
    PEST
    Country
    Intensity
    Likelihood


Additional filters may be added based on specific data attributes





# Server for Data Visualization Dashboard

## Project Overview
The server-side of the Data Visualization Dashboard project is responsible for handling data, serving API requests, and interacting with the MongoDB database.


## Installation
Ensure you have Node.js installed on your machine.



# Navigate to the server directory
cd server



# Install dependencies
npm install

# seed your database
node seeds.js

# Start the server
npm start

# Start the server in development mode
npm run dev


Dependencies

The main dependencies used in the server are:

    Express
    Mongoose
    Body-parser
    Cors
    Dotenv
    Nodemon (for development)
