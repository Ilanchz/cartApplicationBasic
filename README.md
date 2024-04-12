
Shop Application
This is a simple e-commerce application called "Shop Application" built using MongoDB, Express.js, React.js, and Node.js (MERN stack).

Getting Started
Follow these steps to set up and run the application on your local machine:

Prerequisites
Node.js installed on your machine
MongoDB installed and running on your local machine
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/Ilanchz/cartApplicationBasic.git
Navigate to the project directory:

bash
Copy code
cd shop-app
Install dependencies for both the backend and frontend:

bash
Copy code
npm install
Running the Application
Start MongoDB:

bash
Copy code
mongod
Start the backend server (API):

bash
Copy code
node backend/api.js
Start the frontend development server:

bash
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to view the application.

Usage
Browse through the products available in the shop.
Add items to the cart.
Proceed to checkout.
View and update cart items.
Complete the purchase.
Additional Information
This application uses a MongoDB database to store product data. Make sure MongoDB is running on your local machine before starting the backend server.
The backend server is set up to run on port 5000 by default.
The frontend development server typically runs on port 3000.
Fixes Needed
Currently, the application uses a constant variable to hold the entire data collection. It should be modified to fetch data from the database dynamically.
