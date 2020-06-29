# api-node-ecommerce

API for an eCommerce made using Express framework

-   Run "npm install" or "npm i" to install dependencies

-   Create .env file using the .env.example as a model. Here you need to add your local configuration.

-   Run "npm run db:start-seed" to create the database, run migrations and seeders. If you don't want to run the seeders, run ""npm run db:start-seed". You can run "npm run db:drop to drop the database. IMPORTANT: the DB_NAME you set on the .env file will be the name of the database this command will use to create it.

-   To start the server, run "npm run start". This will run the command "nodemon app.js --exec babel-node --". This project uses ES6, so Babel and Nodemon will be needed to run the app.

-   The API is currently using a JSON file to handle mock data.

-   To check the documentation for this API, go to http://localhost:3000 (after starting the server). IMPORTANT: the URL will be different if you set a HOST and PATH different than "localhost" and "3000" on the .env file
