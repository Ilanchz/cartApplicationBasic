# Shop Application

This is a simple e-commerce application called "Shop Application" built using MongoDB, Express.js, React.js, and Node.js (MERN stack).

## Getting Started

Follow these steps to set up and run the application on your local machine:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running on your local machine

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Ilanchz/cartApplicationBasic.git
    ```

2. Navigate to the project directory:

    ```bash
    cd shop-app
    ```

3. Install dependencies for both the backend and frontend:

    ```bash
    npm install
    ```

### Running the Application

1. Start MongoDB:

    ```bash
    mongod
    ```

2. Start the backend server (API):

    ```bash
    node backend/api.js
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Browse through the products available in the shop.
- Add items to the cart.
- Proceed to checkout.
- View and update cart items.
- Complete the purchase.

## Additional Information

- This application uses a MongoDB database to store product data. Make sure MongoDB is running on your local machine before starting the backend server.
- The backend server is set up to run on port 5000 by default.
- The frontend development server typically runs on port 3000.

## Fixes Needed

- Currently, the application uses a constant variable to hold the entire data collection. It should be modified to fetch data from the database dynamically.

