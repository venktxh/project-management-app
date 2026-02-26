# 🚀 Project Management App

A full-stack **Project Management Platform** that helps teams collaborate using **workspaces**, **projects**, and **tasks**, with secure authentication and member invitations.

---

## ✨ Features

### 🏢 Workspaces
- Create and manage multiple workspaces
- Invite team members via email
- Role-based access (Owner, Admin, Member)

### 📁 Projects
- Create projects inside workspaces
- Assign members to projects
- Track project status (Planning, In Progress, Completed)

### ✅ Tasks
- Create tasks under projects
- Task statuses: To Do, In Progress, Done
- Task priorities: Low, Medium, High
- Due dates and upcoming task tracking

### 📊 Dashboard
- Workspace-level analytics
- Project and task statistics
- Task trends and productivity charts
- Upcoming tasks overview

### 🔐 Authentication
- User signup and login
- Email verification
- Password reset
- JWT-based authentication
- Protected routes and APIs

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- React Router
- TanStack React Query
- Tailwind CSS
- shadcn/ui
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer

---

## 🎨 UI Components

This project uses **shadcn/ui**, a modern and customizable component library built on top of Tailwind CSS and Radix UI, providing accessible and reusable UI components.

---

## 📁 Project Structure

```text
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
│   │   │   └── ui/        # shadcn/ui components
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

▶️ Run Locally
Clone repository
git clone https://github.com/your-username/project-management-app.git
cd project-management-app

Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev
