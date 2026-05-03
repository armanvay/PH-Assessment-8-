# 🎓 SkillSphere – Online Learning Platform

## 🌐 Live URL

👉 (https://ph-assessment-8.vercel.app)

---

## 📌 Project Overview

**SkillSphere** is a modern online learning platform where users can explore courses, view details, and enroll in skill-based programs like Web Development, Design, and Marketing.

This project is built using **Next.js App Router**, ensuring a fast, responsive, and seamless user experience.

---

## 🚀 Features

### 🔐 Authentication

* Email & Password Login/Register
* Google Login (Social Authentication)
* Secure session handling using BetterAuth
* Toast notifications for success & error messages

### 🏠 Home Page

* Hero Section (Banner)
* Popular Courses (Top 3 rated)
* Learning Tips section
* Top Instructors section

### 📚 Courses

* All Courses page
* Search functionality (by course title)
* Loading spinner during data fetch
* “No Courses Found” UI

###  Protected Routes

* Course Details page (requires login)
* Redirects to login if not authenticated

### 👤 User Profile

* View user info (name, email, avatar)
* Update profile (name & image)

###  UI & UX

* Fully responsive (Mobile, Tablet, Desktop)
* Clean and modern design
* Animations using Animate.css

### ❗ Extra Features

* Not Found (404) Page
* Toast notifications
* Loader states
* Smooth navigation (App Router)

---

##  Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + HeroUI
* **Authentication:** BetterAuth
* **Icons:** React Icons
* **Notifications:** React Toastify
* **Animation:** Animate.css

---

##  NPM Packages Used

* `next`
* `react`
* `tailwindcss`
* `@heroui/react`
* `better-auth`
* `react-toastify`
* `react-icons`
* `react-loader-spinner`
* `react-fast-marquee`
* `animate.css`

---


---

## 📁 Folder Structure (Simplified)

```
app/
 ├── page.js (Home)
 ├── courses/
 │    ├── page.js
 │    └── [id]/page.js
 ├── login/
 ├── register/
 ├── profile/
components/
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── CourseCard.jsx
 ├── HeroSection.jsx
 ├── TopInstructors.jsx
 ├── LearningTips.jsx
lib/
 ├── auth-client.js
 ├── auth.js
```

---

## 📊 Assignment Requirements Status

| Feature              | Status |
| -------------------- | ------ |
| Navbar & Footer      | ✅ Done |
| Home Page            | ✅ Done |
| Courses Page         | ✅ Done |
| Course Details       | ✅ Done |
| Authentication       | ✅ Done |
| Protected Routes     | ✅ Done |
| Profile & Update     | ✅ Done |
| Search Functionality | ✅ Done |
| Responsive Design    | ✅ Done |
| Not Found Page       | ✅ Done |

---

##  Notes

* No email verification or password reset implemented (as per requirements)
* Ensure environment variables are properly set in deployment (Vercel)

---

## Author

**Md Arman**

---

## Final Note

This project was built as part of the assignment **Category-A8-Orange**, focusing on real-world authentication, protected routes, and modern UI/UX practices.

---
