# DevLevel — Developer Growth System (Updated Build Guide)

## Project Vision

Build a SaaS‑style developer growth platform that combines:

- Skill tracking
- Daily routine tracking
- Task management
- Progress analytics
- Public developer profile

Goal:
A system that measures _real developer growth_ using both skill progress and daily discipline data.

---

# Core System Modules

## 1. Authentication & Users

- Secure login/register
- Profile settings
- Username slug for public profile

Done when:
User can authenticate and access dashboard.

---

## 2. Skills Tracker

Tracks knowledge progress.

Tables:

- categories
- skills
- user_skills

Features:

- checklist skills
- progress % per category
- strongest stack detection

Logic:
progress = completed / total

Done when:
User sees skill progress dashboard.

---

## 3. Daily Routine Tracker ⭐

Tracks consistency, not just knowledge.

Tables:

- habits
- habit_logs

Features:

- log study hours
- coding time
- practice problems
- streak tracking

Metrics:

- weekly consistency score
- streak count

Done when:
User can log daily activity.

---

## 4. Task Management System

Lightweight productivity system.

Tables:

- tasks

Fields:

- title
- status
- priority
- due_date

Views:

- Today
- Upcoming
- Completed

Done when:
User can manage tasks.

---

## 5. Growth Engine (Core Logic Layer)

Calculates developer readiness score.

Formula Example:

score = (skill_progress _ 0.7) + (consistency_score _ 0.3)

Levels:

- 0–40 Beginner
- 40–65 Learning
- 65–85 Job Ready
- 85–100 Strong Candidate

Done when:
Dashboard displays level.

---

## 6. Analytics Dashboard

Charts:

- skill growth over time
- habit consistency
- productivity trend

Libraries:

- Chart.js or ApexCharts

Done when:
User sees growth insights visually.

---

## 7. Public Developer Profile

Route:
/profile/{username}

Displays:

- strongest skills
- readiness level
- activity consistency
- completed tasks count

Bonus:

- share link
- export PDF

Done when:
Profile is publicly accessible.

---

## 8. Production Polish

Add:

- loading states
- empty states
- validation feedback
- toast notifications
- responsive layout

Done when:
App feels production‑ready.

---

## 9. Deployment

Deploy:
Backend → VPS / Render
Frontend → Vercel

README must include:

- live link
- screenshots
- feature list
- demo account

---

# Suggested Build Order (Important)

Always build in this order:

Function → Logic → UI → Polish

Recommended module order:

1. Auth
2. Skills
3. Tasks
4. Habits
5. Growth Engine
6. Analytics
7. Public Profile
8. Polish

---

# Database Architecture

Core Tables:

- users
- categories
- skills
- user_skills
- habits
- habit_logs
- tasks

This schema demonstrates relational design + production thinking.

---

# Backend Architecture Structure

app/

- Actions
- DTOs
- Services
- Repositories
- Policies
- Controllers
- Resources

---

# Frontend Architecture Structure

src/

- modules
- components
- composables
- stores
- services
- pages

---

# Golden Rule

Small working features > unfinished big features

Ship features vertically, not horizontally.

---

# Portfolio Value Statement

This project demonstrates:

- full‑stack architecture
- real SaaS design
- analytics systems
- relational modeling
- state management
- production UI

When completed, this should be your **main portfolio project**.
