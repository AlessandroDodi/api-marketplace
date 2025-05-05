# 🛡️ API Antibot Marketplace

A minimal web application that functions as a micro-marketplace for antibot API services. Built using **React + Vite** on the frontend and **Supabase** as the backend. Designed first in [Figma](https://www.figma.com/design/Tvbiap41bZV0nmCVaB8i78/API-Marketplace?node-id=0-1&t=8UlzqPqeH0DXjhYt-1).

> Built for a coding challenge with a focus on clean structure, minimal UX, and fast development.

---

## 🚀 Features

- Browse listed antibot APIs
- View detailed API service pages
- Reveal vendor email on interest
- Add new API listings through a vendor form
- Filter and search by category or name

---

## 🧱 Tech Stack

- ⚛️ React + Vite
- 🧮 Supabase (Database + Auth)
- 🎨 Figma (for UI design)
- 🧑‍💻 TypeScript

---

## 📂 Pages Overview

- `/explore` – Explore all API services
- `/service/:id` – Detailed service view
- Vendor form to submit new APIs

---

## 🧪 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the app locally
npm run dev
```

## 🔐 Environment Setup

Create a project in Supabase.

In your project dashboard, go to Project Settings > API and copy:

- SUPABASE_URL
- SUPABASE_ANON_KEY

Create a .env.local file in the root of the project and add:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

❗Note: Never commit .env.local to version control. It should be listed in .gitignore.

## 🛠️ Database Schema

The app uses a single table called `api_services` in Supabase, structured as follows:

| Column        | Type        | Description                               |
| ------------- | ----------- | ----------------------------------------- |
| id            | int8        | Primary key (auto-incremented)            |
| created_at    | timestamptz | Timestamp when the record was created     |
| name          | text        | Name of the API                           |
| description   | text        | Detailed description of the service       |
| category      | text        | Category (e.g. CAPTCHA, fingerprinting)   |
| price         | numeric     | Monthly price of the API                  |
| seller_name   | text        | Name of the API vendor                    |
| company_email | text        | Contact email, revealed on interest click |

## 🧾 License

MIT — use it freely, commercially or for learning.

## ✍️ Credits

Designed in Figma
Built with ❤️ using Vite, React, and Supabase.
