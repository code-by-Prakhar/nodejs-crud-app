# Node.js CRUD Application

A complete CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. This project demonstrates how to build a RESTful API with proper error handling and data validation.

## 🚀 Features

- Complete CRUD operations
- RESTful API endpoints
- MongoDB database integration
- Input validation
- Error handling
- API documentation
- Environment configuration

## ⚙️ Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Postman (for testing APIs)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/nodejs-crud-app.git
cd nodejs-crud-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

## 📡 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/read | Get all users |
| POST   | /api/create | Create new user |
| PATCH    | /api/update/:id | Update user |
| DELETE | /api/delete/:id | Delete user |

### Request & Response Examples

#### Create User
```json
// POST /api/users
// Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "number":1111111,
  "city":"delhi"
}

// Response
{
  "success": true,
  "data": {
    "id": "60f1a2b3c4d5e6f7g8h9i0",
    "name": "John Doe",
    "email": "john@example.com",
    "number": 11111111,
    "city"::delhi"
    "createdAt": "2025-02-23T10:00:00.000Z"
  }
}
```

## 🏗️ Project Structure

```
├── src/
│   ├── db/
│   │   └── database.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## 🔑 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Application port | 3000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/crud-app |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🎥 Video Tutorial

Check out the complete video tutorial on my YouTube channel: [Code by Prakhar]([your-createyoutube-link](https://youtu.be/daL_k7CQbis?si=cYkT2XR6rSy5v2f2))

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- Node.js best practices
- Community contributors

---
Made with ❤️ by Prakhar
