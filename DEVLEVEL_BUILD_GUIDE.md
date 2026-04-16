# DevLevel — Developer Growth System (MVP Build Guide)

---

# 🧭 Project Vision

DevLevel is a developer growth tracking system that measures:

- Skill progress
- Daily consistency
- Overall readiness score

**Goal:**
Provide a clear, data-driven way to track developer improvement and job readiness.

---

# 🧱 Final Scope (MVP)

Only build these:

1. Authentication
2. Skills Tracker
3. Daily Routine Tracker
4. Growth Engine
5. Dashboard
6. UI Polish + Deployment

---

# 🗂️ Sidebar Navigation (Frontend UX Plan)

### Sidebar Items

- Dashboard
- Skills
- Routine
- Profile

---

## 🧭 1. Dashboard

**Purpose:**
Central overview of user progress.

**Display:**

- Growth Score (main highlight)
- Level (Beginner → Strong Candidate)
- Skill Progress %
- Consistency Score
- Current Streak

**Components:**

- ScoreCard.vue
- ProgressCard.vue
- StreakCard.vue

---

## 🧠 2. Skills

**Purpose:**
Track knowledge progress.

**Display:**

- Categories (Frontend, Backend, etc.)
- Skills checklist per category
- Progress bar per category

**Features:**

- Toggle skill completion
- Auto-update progress %

---

## 🔁 3. Routine

**Purpose:**
Track daily discipline.

**Display:**

- Today’s log form
- Last 7 days activity
- Streak count

**Inputs:**

- Coding hours
- Study hours

**Features:**

- Daily logging
- Streak calculation
- Weekly consistency score

---

## 👤 4. Profile

**Purpose:**
Basic user info.

**Display:**

- Name
- Email
- Username (slug)
- Joined date

**Features:**

- Update profile info

---

# 🧢 Header Content

- App Name: DevLevel
- User dropdown:
    - Profile
    - Logout

- Optional:
    - Current Level badge

---

# 🗄️ Database Schema (MVP)

## users

- id
- name
- email
- password
- username (unique)
- created_at

---

## categories

- id
- name

---

## skills

- id
- category_id
- name

---

## user_skills

- id
- user_id
- skill_id
- is_completed (boolean)

---

## habits

- id
- user_id
- name (e.g. Coding, Study)

---

## habit_logs

- id
- user_id
- date
- coding_hours (float)
- study_hours (float)

---

# 🧠 Core Logic

---

## Skill Progress

```php
progress = completed_skills / total_skills * 100;
```

---

## Consistency Score (last 7 days)

```php
consistency = (days_logged / 7) * 100;
```

---

## Streak Logic

- Count consecutive days with logs
- Reset if day missed

---

## Growth Score

```php
score = (skill_progress * 0.7) + (consistency_score * 0.3);
```

---

## Level Mapping

- 0–40 → Beginner
- 40–65 → Learning
- 65–85 → Job Ready
- 85–100 → Strong Candidate

---

# 🧩 Backend Structure (Laravel)

```
app/
 ├── Http/
 │    ├── Controllers/
 │
 ├── Services/
 │    ├── SkillService.php
 │    ├── HabitService.php
 │    ├── GrowthService.php
 │
 ├── Models/
 ├── Policies/
 ├── Http/Resources/
```

---

## Key Services

### SkillService

- calculateProgress()
- toggleSkill()

### HabitService

- logToday()
- calculateStreak()
- calculateConsistency()

### GrowthService

- calculateScore()
- getLevel()

---

# 🖥️ Frontend Structure (Vue 3 + TS)

```
src/
 ├── modules/
 │    ├── auth/
 │    ├── skills/
 │    ├── routine/
 │    ├── dashboard/
 │
 ├── components/
 │    ├── ui/
 │    ├── cards/
 │
 ├── composables/
 │    ├── useSkills.ts
 │    ├── useHabits.ts
 │    ├── useGrowth.ts
 │
 ├── stores/
 │    ├── authStore.ts
 │    ├── skillStore.ts
 │    ├── habitStore.ts
 │
 ├── services/
 │    ├── api.ts
 │
 ├── pages/
```

---

# 🔌 API Endpoints

## Auth

- POST /login
- POST /register
- POST /logout

---

## Skills

- GET /skills
- POST /skills/toggle

---

## Habits

- GET /habits
- POST /habits/log

---

## Growth

- GET /growth

Returns:

- skill_progress
- consistency_score
- score
- level

---

# 🎨 UI Components Checklist

- Sidebar
- Header
- Cards (reusable)
- Progress bars
- Form inputs
- Toast notifications

---

# ⚡ Build Order (STRICT)

1. Auth (login/register)
2. Skills (CRUD + progress)
3. Routine (logging + streak)
4. Growth Engine (score + level)
5. Dashboard UI
6. Polish
7. Deploy

---

# 🎯 Definition of Done

✔ User can log in
✔ User can track skills
✔ User can log daily activity
✔ System calculates growth score
✔ Dashboard displays everything clearly
✔ App is deployed

---

# 🔮 Future Improvements (DO NOT BUILD NOW)

- Public profile page
- Charts (analytics)
- Task management
- Export to PDF

---

# 🧠 Golden Rule

> Small working system > Big unfinished system

---

# 💼 Portfolio Value Statement

DevLevel demonstrates:

- Full-stack Laravel + Vue architecture
- Relational database design
- Business logic implementation (growth scoring)
- State management with Pinia
- Clean UI and user experience

---

# 🚀 Final Goal

Be able to confidently say:

> “I built a developer growth tracking system that combines skill progress and daily consistency into a measurable readiness score.”

---
