# Task Manager App Documentation
## Setup Instructions
## Backend Setup
### 1.Clone the Repository
Start by cloning the repository to your local machine:

```
git clone https://github.com/birajsaikia/taskmeneger-backend.git
cd taskmeneger-backend
```
### 2.Install Dependencies
Navigate to the backend directory and install the necessary packages:

```
cd index
npm install
```
### 3.Environment Setup
Create a .env file in the server directory to store sensitive information like MongoDB URI and the JWT secret:

```
MONGODB_URI=mongodb://0.0.0.0:27017/taskmaneger
JWT_SECRET=yourSecretKey
```
### 4.Start the Backend Server
Once dependencies are installed and the .env file is set up, start the backend server:

```
npm start
The backend API will be available at http://localhost:5000
```

## Frontend Setup
### 1.Navigate to the Frontend Directory
From the root project directory, go to the frontend folder:

```
cd ctaskmeneger-backend
```
### 2.Install Dependencies
Install the necessary React and Material-UI dependencies:

```
npm install
```
### 3.Start the React App
Start the React development server:
```
npm start
```
The frontend application will be available at http://localhost:3000.

## Design Choices and Assumptions
### Frontend Design:
- React and Material-UI:
React was chosen for the frontend due to its flexibility and component-based structure, allowing for efficient UI updates. Material-UI was used for the design and components, ensuring a clean and responsive UI with minimal custom CSS.

- State Management with React's useState:
For simplicity, React's built-in useState hook is used to manage the state in functional components. This approach was chosen for its ease of use in smaller apps. If the app scales in the future, a state management library like Redux may be considered.

- Axios for API Requests:
Axios was selected for making HTTP requests because of its simplicity, support for promises, and ease of handling JSON data.

- JWT Authentication:
The app uses JSON Web Tokens (JWT) to authenticate users. This was chosen because JWTs are stateless and store user information on the client-side, reducing server load and simplifying scaling. JWTs are stored in cookies for security.

### Backend Design:
- Node.js and Express:
Node.js with Express was chosen for the backend because it's lightweight, scalable, and works well with JavaScript. Express simplifies routing and middleware management.

- MongoDB Database:
MongoDB was used as the database because it's flexible, schema-less, and works well with JSON-like data, which makes it an ideal choice for handling dynamic task data.

- JWT Authentication:
JWT authentication is used for securing user login and managing sessions. A JWT token is generated upon successful login and is stored in the client's cookies for subsequent requests.

- Task and User Schema Design:
The backend defines a user schema with fields for userid and password and a task schema with fields for title, description, and userid. The task schema is associated with the user to ensure each task belongs to a specific user.

## Additional Features Implemented
- Search Functionality:
Users can search for tasks by their title or description. This feature enhances the usability of the app and helps users quickly find tasks.

- Pagination:
Tasks are displayed with pagination, loading a maximum of 3 tasks per page. This helps to manage large amounts of tasks and improve the user experience by not overwhelming the interface.

- Error Handling:
The app includes error handling on both the frontend and backend. On the frontend, errors are displayed with helpful messages, and on the backend, validation errors and server issues are returned with descriptive messages.

- Task Filtering:
The app includes filtering capabilities, allowing users to view only tasks associated with their logged-in user.

## Links to Deployed Application
### Frontend (React):
- Link: 
[Frontend](https://taskmeneger-forntent.vercel.app)


The frontend of the app is hosted on [your hosting service] (e.g., Netlify, Vercel). Visit this link to interact with the application.
### Backend (Node.js API):
- Link: [Backend](https://taskmanager-backend-1-1mjl.onrender.com)


The backend API is hosted on [your hosting service] (e.g., Heroku, AWS). Use this link for API interactions (e.g., to register, log in, and manage tasks).
