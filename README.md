
# 5K Gibi Gubae Book Store Website

A full-stack web application built to support the book club of our campus ministry, 5 Kilo Gibi Gubae. This platform allows users to explore books available for rental and enables book club admins to manage book listings and rental requests.

---

## 🚀 Project Overview

This website is designed to:
- Showcase books available in the campus ministry book club.
- Allow authenticated users to view book details and check availability.
- Provide admin-level access to manage books and handle rental requests.
- Reflect the branding and values of the ministry in its design and experience.

---

## 🛠️ Tech Stack

### Backend
- **Python** + **Django**
- **Django REST Framework**
- **MySQL** (for production)
- **SQLite** (for local development)

### Frontend
- HTML5, CSS3, Bootstrap
- (React to be added later)

### Tools & Deployment
- GitHub for version control
- GitHub Projects for Agile sprint planning
- Deployment (TBD): Render / Netlify / Vercel

---

## 🌐 Features

| Feature               | Description                                              |
|----------------------|----------------------------------------------------------|
| User Authentication  | Login and signup functionality                          |
| Book Listing         | Display available books with cover and short info       |
| Book Detail View     | View full book details including availability           |
| Admin Dashboard      | Add, update, delete books; approve or track rentals     |
| Role-based Access    | Different views for admins vs regular users             |

---

## 🧑‍💻 Getting Started

### Prerequisites
- Python 3.10+
- pip
- MySQL Server (or SQLite for testing)

### Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Bemnet57/5K_Bookstore.git
   cd 5K_Bookstore/backend
2. **Create virtual environment**
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use: env\Scripts\activate
3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
4. **Set up environment variables**
   - Create a .env file in backend/ with:
   ```bash
   DB_NAME=yourdbname
   DB_USER=yourdbuser
   DB_PASSWORD=yourdbpassword
   SECRET_KEY=yourdjango_secret_key
5. **Run the server**
   ```bash
   python manage.py migrate
   python manage.py runserver   
## 🗂️ Project Structure
```bash
Copy
Edit
bookclub_website/
│
├── backend/
│   ├── bookclub_backend/
│   ├── books/
│   ├── users/
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   └── css/
│
└── README.md


