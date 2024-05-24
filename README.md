# MyProject

Welcome to MyProject! This project aims to streamline issue management and profile handling for users and admins. The core functionality includes user registration, login, profile management, and an intuitive interface for handling issues. 

Admins have the ability to view and delete all issues, whereas regular users can view only their own issues and create new ones. 

## Features

- **User Authentication**: Secure login and registration for users and admins.
- **Profile Management**: Users can view their profile details and achievements.
- **Issue Management**: 
  - Admins can view and delete any issue.
  - Users can view, create, and manage their own issues.
- **Responsive Design**: The application is designed to be fully responsive and user-friendly across various devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: Sequelize ORM with a choice of SQL databases (e.g., PostgreSQL, MySQL)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS with responsive design techniques

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v12+)
- npm (v6+)
- A SQL database ( MySQL)

### Backend Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/myproject.git
    cd myproject
    ```

2. **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

3. **Configure environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    PORT=3001
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the backend server:**
    ```sh
    npm start
    ```

### Frontend Setup

1. **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

2. **Run the frontend server:**
    ```sh
    npm start
    ```

The frontend application will be available at `http://localhost:3000` and the backend API will be running on `http://localhost:3001`.

## Usage

1. **Register a User:**
   Navigate to the registration page and create a new account.

2. **Login:**
   Use your credentials to log in.

3. **Profile Page:**
   - Users can view their profile details and achievements.
   - Admins and users will see their role specified on this page.

4. **Issue Management:**
   - Admins can view all issues and have the option to delete any issue.
   - Users can view their own issues and have the option to create new issues.

## Code Structure

### Backend
- **controllers/**: Handles request logic for authentication, users, and issues.
- **models/**: Sequelize models for User and Issue.
- **routes/**: Express routes for authentication, user, and issue endpoints.
- **middleware/**: Contains authentication middleware for protecting routes.
- **config/**: Database configuration and connection.

### Frontend
- **src/components/**: React components for different parts of the application.
- **src/services/**: API service functions for making HTTP requests.
- **src/App.js**: Main application component.
- **src/ProfilePage.css**: Styles for the ProfilePage component.


## Contact

Your Name - [your-email@example.com](mailto:suryaraja8903@gmail.com)

Project Link: [https://github.com/yourusername/myproject](https://eco-track-beige.vercel.app/)
