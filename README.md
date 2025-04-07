# WRAVEN Threat Actor Dashboard

## Overview
The WRAVEN Threat Actor Dashboard is a web application designed to provide insights and analytics on threat actors and their activities. The application is built using a FastAPI/Flask backend and a React frontend, ensuring a modern and responsive user experience.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
The backend is developed using FastAPI/Flask and is responsible for handling API requests, managing the database, and implementing business logic.

- **app**: Contains the main application code.
  - **api**: Defines the API endpoints for authentication, threats, and dashboard statistics.
  - **core**: Contains configuration, security, and settings management.
  - **db**: Manages database models and sessions.
  - **schemas**: Defines data validation schemas using Pydantic.
  - **services**: Contains business logic for threat analysis.
- **tests**: Contains unit tests for the application.
- **requirements.txt**: Lists the dependencies required for the backend.
- **Dockerfile**: Contains instructions for building the backend Docker image.

### Frontend
The frontend is developed using React and provides a user interface for interacting with the backend.

- **public**: Contains static files such as the main HTML file and favicon.
- **src**: Contains the main application code.
  - **api**: Handles API interactions.
  - **components**: Contains reusable UI components.
  - **pages**: Defines the main pages of the application.
  - **store**: Manages application state using Redux.
  - **types**: Defines TypeScript types for the application.
  - **utils**: Contains utility functions for API interactions and authentication.
- **package.json**: Lists the dependencies and scripts for the frontend.
- **tsconfig.json**: Contains TypeScript configuration settings.
- **Dockerfile**: Contains instructions for building the frontend Docker image.

## Getting Started

### Prerequisites
- Python 3.x
- Node.js and npm
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd wraven-threat-dashboard
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install the required Node packages:
     ```
     npm install
     ```

### Running the Application

- To run the backend:
  ```
  cd backend
  python -m app.main
  ```

- To run the frontend:
  ```
  cd frontend
  npm start
  ```

### Docker
To run the application using Docker, you can use the provided `docker-compose.yml` file. Run the following command in the root directory:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.