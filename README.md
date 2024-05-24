# EcoTrack - Smart Community Waste Management System

Welcome to EcoTrack! This project aims to streamline issue management and profile handling for users and admins. The core functionality includes user registration, login, profile management, and an intuitive interface for handling issues.

Admins have the ability to view and delete all issues, whereas regular users can view only their own issues and create new ones.

## Screenshots

### Home Page
[![Home Page](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(336).png)](https://eco-track-beige.vercel.app/)

### User Dashboard Page
![User Dashboard](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(340).png)

### Admin Dashboard Page
![Admin Dashboard](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(330).png)
![Admin Dashboard](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(334).png)

### Profile Page (User)
![Profile Page - User](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(343).png)
![Profile Page - User](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(344).png)

### Profile Page (Admin)
![Profile Page - Admin](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(335).png)

### My Schedules Page
![My Schedules](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(341).png)
![My Schedules](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(342).png)

### Allocate Schedules Page
![Allocate Schedules](https://github.com/SuryaR08/EcoTrack/blob/main/client/src/img/Screenshot%20(329).png)

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
- A SQL database (e.g., PostgreSQL, MySQL)

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

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [suryaraja8903@gmail.com](mailto:suryaraja8903@gmail.com)

Project Link: [https://eco-track-beige.vercel.app/](https://eco-track-beige.vercel.app/)
