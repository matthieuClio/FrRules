# Demonstration Platform API – Node.js / Express / MySQL

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Deployment](https://img.shields.io/badge/Deployed-Render-purple)

---

## Overview

This project is a **RESTful API** built with **Node.js** and **Express**.  
It provides user authentication and account creation.

The API follows **professional backend standards** and aims to showcase my Node.js skills.  
That's why it focuses on the authentication and account creation process.

---

## Features

- Secure authentication using **JWT**
- User registration & login
- Protected routes with authentication middleware
- Relational database with **MySQL**
- User progress tracking
- RESTful architecture
- Cloud deployment (**Render + AlwaysData**)

---

## Tech Stack

### Backend
- **Node.js**
- **Express**
- **MySQL** (`mysql2`)
- **JWT** (`jsonwebtoken`)
- **bcrypt**
- **dotenv**

### Infrastructure
- **Render** (API hosting)
- **AlwaysData** (MySQL database)

---

## 🗂️ Project Architecture

```txt
src/
├── app.js
├── server.js
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
```

MVC-inspired architecture focused on maintainability and scalability.


## 🔐 Authentication

Authentication is handled via JSON Web Tokens (JWT).

1. User logs in

2. API returns a signed JWT

3. Client sends the token in the Authorization header

4. Middleware validates access to protected routes

## Required header
```bash
Authorization: Bearer <TOKEN>
```

## Main Endpoints
### Authentication
Method	  -    Endpoint	       -     Description  
POST	   -     /api/auth/register	-  Register a new user    
POST	   -     /api/auth/login	  -    Login and retrieve JWT  

### Users
Method	 -     Endpoint	       -     Protected  
GET	    -      /api/users/profile	 -  JWT required

## Project Purpose
This project demonstrates:  

- REST API development with Node.js  
- Secure authentication with JWT  
- Relational database design using MySQL  
- loud deployment
- Backend architecture suitable for React applications
