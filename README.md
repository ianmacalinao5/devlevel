# DevLevel — Developer Growth System

A full‑stack SaaS platform that tracks developer skills, daily learning routines, productivity tasks, and growth analytics.

Built with a modern monorepo architecture using:

- Backend → Laravel API
- Frontend → Vue 3 + TypeScript
- State → Pinia
- Styling → TailwindCSS

---

# Live Concept

DevLevel measures real developer progress using:

- Skill mastery
- Consistency tracking
- Productivity metrics
- Growth scoring engine

This is not just a tracker — it is a **Developer Growth Operating System**.

---

# Features

## Core
- Authentication system
- Skill progress tracking
- Task management
- Habit logging
- Growth score calculation
- Analytics dashboard
- Public developer profile

## UX
- Loading states
- Validation feedback
- Toast notifications
- Responsive layout

## Architecture
- REST API design
- Layered backend structure
- Modular frontend architecture
- Clean separation of concerns

---

# Monorepo Structure

```
root/
 ├── backend/   → Laravel API
 └── frontend/  → Vue application
```

---

# Local Development Setup

## 1. Clone Repo

```
git clone <repo-url>
cd devlevel
```

---

## 2. Backend Setup (Laravel)

```
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Server runs on:

```
http://localhost:8000
```

---

## 3. Frontend Setup (Vue)

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Environment Variables

Backend `.env`

```
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
```

Frontend `.env`

```
VITE_API_URL=http://localhost:8000/api
```

---

# API Architecture

Pattern:

Controller → Service → Repository → Model

This structure improves:
- maintainability
- testability
- scalability

---

# Database Schema Overview

Core Tables:

- users
- skills
- categories
- user_skills
- tasks
- habits
- habit_logs

---

# Growth Score Logic

Example formula:

```
score = (skill_progress × 0.7) + (consistency × 0.3)
```

Levels:

| Score | Level |
|------|------|
| 0–40 | Beginner |
| 40–65 | Learning |
| 65–85 | Job Ready |
| 85–100 | Strong Candidate |

---

# Deployment

Frontend → Vercel
Backend → VPS / Render

---

# Project Purpose

This project demonstrates:

- full‑stack engineering
- SaaS architecture
- analytics systems
- relational database design
- scalable code structure

---

# Author

Ian — Full Stack Developer

---

# License

MIT

