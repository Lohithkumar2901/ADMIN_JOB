# 🧑‍💼 Job Management Admin Interface

A full-stack Job Management Admin Interface built with **Next.js**, **Mantine UI**, **NestJS**, and **PostgreSQL**. This platform allows administrators to manage job listings with a clean, responsive UI and powerful backend API support.

## 🚀 Features

### Frontend (Next.js + Mantine)
- Responsive design using **Mantine UI**.
- Filters for job type, location, salary range.
- Real-time job listing cards with clean layout.
- Admin dashboard-style home page (not separate route).
- Built with TypeScript and React Hook Form.
- Styled as per provided Figma design.

### Backend (NestJS + PostgreSQL)
- RESTful API with CRUD operations.
- Job creation, deletion, retrieval.
- Sequelize ORM for database modeling.
- Modular structure with DTOs and validation.

## 🔧 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | Next.js (App Router) |
| UI        | Mantine, Tabler Icons |
| Forms     | React Hook Form  |
| Backend   | NestJS           |
| DB        | PostgreSQL + Sequelize |
| API       | REST             |
| Styling   | Tailwind & Mantine |
| Auth      | (Optional) JWT or Auth Guards |

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/Lohithkumar2901/ADMIN_JOB.git
cd ADMIN_JOB


Install dependencies for both backend and frontend seperately:

npm install

Run the backend app:

npm run start:dev

Run the  frontend app:

npm run dev

Visit:

http://localhost:3000
