# 📝 Keeper App

A simple note-taking web app built with React, inspired by Google Keep. Users can create and delete notes quickly with an intuitive UI.

---

## 🚀 Live Demo

- **Netlify**: [https://keeperap.netlify.app/]

---

## 📌 Features

- ✅ Create Notes
- 🗑️ Delete Notes
- 💡 Clean and minimal design
- ⚡ Instant UI updates using React hooks
- 📱 Fully responsive layout

---

## 🧑‍💻 Tech Stack

- **Frontend**: React.js, JavaScript, HTML5, CSS3
- **State Management**: React `useState`
- **Hosting**: Netlify
- **Version Control**: Git & GitHub

---

## 😓 Problems Faced & Solutions

### 1. State Update Issues
- **Problem**: Notes wouldn't update instantly after deletion.
- **Fix**: Managed notes using `useState` with `filter()` for removal.

### 2. Component Structure
- **Problem**: Mixing logic in one component made code messy.
- **Fix**: Broke into smaller components (`App`, `Note`, `CreateArea`) to follow React best practices.

### 3. Deployment Errors
- **Problem**: App didn't load styles on deployment.
- **Fix**: Ensured correct `build` folder path and set public folder correctly.

---

## 📂 Folder Structure

