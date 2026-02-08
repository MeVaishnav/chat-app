# QuickChat — Real-Time MERN Chat Application

QuickChat is a full-stack real-time chat application built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **Socket.io** for instant messaging.  
It includes secure authentication, profile management, real-time online status, user search, and media sharing.

---

## Features

- User Signup & Login (JWT Authentication)
- Protected Routes (Backend + Frontend)
- Real-time Messaging using Socket.io
- Online/Offline User Status
- Search Users
- Profile Update (Name, Bio, Profile Picture)
- Image Sharing in Chat
- Fully Responsive UI (Mobile + Desktop)

---

## Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- Socket.io

### Media Storage

- Cloudinary (Profile picture upload)

---

## Project Structure

```bash
chat-app/
│
├── client/                 # React frontend
│   ├── src/
│   ├── context/
│   └── ...
│
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── library/
│   └── ...
│
└── README.md
 Environment Variables
Backend (server/.env)
Create a .env file inside the server folder:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
Frontend (client/.env)
Create a .env file inside the client folder:

VITE_BACKEND_URL=http://localhost:5000
▶ Installation & Setup
1) Clone the Repository
git clone https://github.com/your-username/quickchat.git
cd quickchat
2) Install Backend Dependencies
cd server
npm install
3) Install Frontend Dependencies
cd ../client
npm install
▶ Running the Project
Start Backend
cd server
npm run server
Backend runs at:

http://localhost:5000
Start Frontend
cd client
npm run dev
Frontend runs at:

http://localhost:5173
Authentication Flow
User signs up / logs in

Server generates a JWT token

Token is stored in LocalStorage

Token is sent in request headers for protected routes

Server verifies the token using middleware

 API Routes
Auth Routes
Method	Route	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user
GET	/api/auth/check	Check authenticated user
POST	/api/auth/update-profile	Update user profile
Message Routes
Method	Route	Description
GET	/api/messages/:id	Fetch messages with a user
POST	/api/messages/send/:id	Send a message to a user
 Notes
Ensure MongoDB and Cloudinary credentials are correctly configured.

Both backend and frontend must be running simultaneously for real-time chat features.
```
