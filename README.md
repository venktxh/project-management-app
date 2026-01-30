🚀 Project Management App

A full-stack Project Management Platform that allows teams to collaborate using workspaces, projects, and tasks, with secure user authentication and member invitations.

✨ Features
🏢 Workspaces

Create and manage multiple workspaces

Invite users to collaborate

Role-based access (owner, admin, member)

📁 Projects

Create projects inside a workspace

Assign members to projects

Track project status (Planning, In Progress, Completed)

✅ Tasks

Create tasks under projects

Task statuses: To Do, In Progress, Done

Task priorities: Low, Medium, High

Due dates and upcoming task tracking

📊 Dashboard & Analytics

Workspace-level dashboard

Project and task statistics

Task trends and productivity charts

Upcoming tasks overview

🔐 Authentication & Security

User signup & login

Email verification

Password reset

JWT-based authentication

Protected API routes

🛠 Tech Stack
Frontend

React

TypeScript

React Router

React Query (TanStack Query)

Tailwind CSS

Recharts (for analytics & charts)

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Nodemailer (email invites & verification)

📁 Project Structure
project-management-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── libs/
│   └── index.js
│
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── provider/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md

⚙️ Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:5173

▶️ Running the Project Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/project-management-app.git
cd project-management-app

2️⃣ Backend setup
cd backend
npm install
npm run dev


Server runs on:

http://localhost:5000

3️⃣ Frontend setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173
