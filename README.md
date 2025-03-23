
# MoneyMap - Expense Management Web App




## Overview
MoneyMap is a full-stack expense management web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to track their expenses efficiently while providing a secure authentication system with protected routes.


## Features

- **User Authentication:** Secure login and registration using JWT authentican
- **Protected Routes**: Access control for authenticated users.
- **Expense Tracking**: Users can add, update, and delete expenses.
- **Data Visualization**: Graphs and charts to analyze spending patterns.
- **MongoDB Database**: Data is stored and managed using MongoDB.
- **RESTful API**: Backend services built using Node.js and Express.js.
- **Responsive UI**: Built using React.js for a smooth and interactive experience.


## Tech Stack

**Frontend:** React, Redux, TailwindCSS

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:** JWT (JSON Web Token)

**State Management:** Redux


## Installation

Steps to Run the Project

**Clone the repository:**
```bash
  https://github.com/YuvrajRajbanshi/MoneyMap.git
  cd MoneyMap
```

**Install dependencies:**
- Backend
```bash
  cd backend
  npm install
```
- Frontend
```bash
  cd frontend
  npm install
```
**Set up environment variables:**    
- Create a .env file in the backend folder and add the following:
```bash
  PORT=your_port
  MONGODB_URI=your_mongodb_connection_string
```


## Run Locally

**Start the application:**
- Backend
```bash
  cd backend
  npm run dev
```
- Frontend
```bash
  cd frontend
  npm run dev
```

