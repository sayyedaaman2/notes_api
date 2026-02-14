# Notes API

A production-ready RESTful API for managing notes, built using **Node.js** and **Express**.  
The project follows clean backend architecture with proper security, validation, logging, and error handling.

This API is designed to demonstrate **real backend practices**, not tutorial shortcuts.

---

## 🚀 Features

- 📝 Create, Read, Update, Delete (CRUD) Notes
- ✅ Request validation using `express-validator`
- 🛡 Security headers with `helmet`
- 🚫 Rate limiting to prevent abuse
- 🌐 CORS configuration
- 📊 Structured request logging
- ❌ Centralized error handling
- ⚙️ Environment-based configuration

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **express-validator**
- **helmet**
- **express-rate-limit**
- **cors**
- **dotenv**

---

## 📁 Project Structure
```folder
notes_api/
│
├── config/ # Environment & server configuration
├── controllers/ # Route controllers (business logic)
├── middleware/ # Custom middlewares
├── models/ # Database models
├── routes/ # API routes
├── utility/ # Logger and helper utilities
├── validators/ # Request validators
│
├── app.js # Express app entry point
├── package.json
└── .env.example
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sayyedaaman2/notes_api.git
cd notes_api
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Setup environment variables
Create a .env file in the root directory:
```bash
PORT=9000
NODE_ENV=development
```
### 4️⃣ Start the server
```bash
npm start
```
Server will run on:
```terminal
http://localhost:3000
```
---
## 🧪 Health Check
```http
GET /test
```
### Response
```json
{
  "success": true,
  "message": "API is healthy"
}
```
This route is not **rate-limited** and is safe for uptime checks.

---
## 📡 API Endpoints (Notes)
| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/notes`     | Get all notes     |
| GET    | `/notes/:id` | Get note by ID    |
| POST   | `/notes`     | Create a new note |
| PUT    | `/notes/:id` | Update a note     |
| DELETE | `/notes/:id` | Delete a note     |

---
## ✅ Validation

All incoming requests are validated using `express-validator`.

Example error response:
```json
{
  "errors": [
    {
      "msg": "Title is required",
      "path": "title"
    }
  ]
}
```
Invalid data **never reaches controllers**.

---
## 🚫 Rate Limiting
The API enforces rate limiting:

- 100 requests per 15 minutes per IP

- Returns `429 Too Many Requests` when exceeded

- Rate-limit headers are included in responses

This prevents brute-force and abuse.

---
## 🔐 Security
- **Helmet** sets secure HTTP headers

- **CORS** configured for controlled access

- **Rate limiting** enabled

- **Error messages hidden in production**

- **Trust proxy enabled** for correct IP handling

Security is layered — not assumed.

---
## 📊 Logging

Each request logs:

- HTTP method

- Route path

- Status code

- Response time

- Client IP

This helps debugging and monitoring in production.

---
## ❌ Error Handling- 

- Centralized global error handler

- Clean JSON error responses

- Stack traces logged internally

- No sensitive information leaked to clients

---
## 🧠 Design Philosophy

- Middleware handles cross-cutting concerns

- Controllers stay clean

- Validation happens before logic

- Security is intentional, not accidental

This project reflects **real backend discipline**.

---
## 📌 Future Improvements

- Redis-based rate limiting

- Authentication & authorization (JWT)

- Swagger / OpenAPI documentation

- Automated tests

- CI/CD pipeline

---
## 📄 License

MIT License

--- 
## 👨‍💻 Author

<h3 align="center">Aaman Sayyed</h3>

<p align="center">
  <a href="https://sayyedaaman.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Portfolio-000?style=for-the-badge" />
  </a>
  <a href="https://www.linkedin.com/in/sayyed-aaman/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/sayyedaaman2">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="mailto:sayyedaaman9@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>