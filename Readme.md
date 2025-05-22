# Expense Tracker

A full-stack MERN (MongoDB, Express, React, Node.js) application for tracking expenses.

## Project Structure

```
.
├── backend/    # Express.js & MongoDB API
└── frontend/   # React.js client
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd <project-directory>
   ```

2. **Install dependencies:**

   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure environment variables:**

   - Create a `.env` file in `backend/` with your MongoDB URI and other configs.

4. **Run the application:**

   - Start backend:
     ```bash
     cd backend
     npm start
     ```
   - Start frontend:
     ```bash
     cd ../frontend
     npm start
     ```

## Features

- User authentication
- Add, edit, delete expenses
- View expense history
- Responsive UI

## License

MIT
