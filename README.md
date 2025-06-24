# AI Mock Interview 

**AI Mock Interview** is an innovative web application designed to simulate real-world mock interviews using AI. With seamless user authentication, an intuitive interface, and integration with Google Gemini AI, this project is your ultimate preparation tool for job interviews.

> **Deployed On:** [ai-mock-interview-3c799.web.app](https://ai-mock-interview-3c799.web.app)

> **GitHub Profile:** [sucharita-pal-04](https://github.com/sucharita-pal-04)

---

##  Features

- **AI-Powered Mock Interviews**  
  Simulate realistic interview scenarios using Google Gemini AI with instant feedback.

- **Seamless Authentication**  
  Secure user authentication using Clerk.

- **Modern UI**  
  Built with Shadcn UI for a clean and responsive experience.

- **Secure Data Management**  
  Interview analytics and user progress are stored in Google Firebase Firestore.

- **Customizable Interviews**  
  Select job roles, domains, and difficulty levels for personalized practice.

---

## 🌐 Live Demo

👉 [Visit the Live Project](https://ai-mock-interview-3c799.web.app)

---

## 🛠 Tech Stack

- **Frontend:** React.js, Vite, TypeScript
- **Authentication:** Clerk
- **UI Framework:** Shadcn UI
- **Database:** Google Firebase Firestore
- **AI Integration:** Google Gemini API
- **Deployment:** Firebase Hosting

---

## ⚙️ Getting Started

### Prerequisites
- Node.js
- Firebase account
- Clerk account
#!/bin/bash

## Installation

1.Clone the repository:
```bash
git clone https://github.com/sucharita-pal-04/ai-mock-interview.git
```
---
2. Navigate to the Project Directory:
```bash
   cd ai-mock-interview
```
---
3.Install pnpm globally:
```bash
 npm install -g pnpm
```
 ---
4.Install project dependencies:
```bash
  pnpm install
```
---
5.Start the development server:
```bash
 pnpm run dev
```
🔥 Firebase Setup
Initialize Firebase:

```bash
firebase init
```
Deploy to Firebase:

```bash
firebase deploy
```
⚙️ Build for Production
```bash

pnpm run build
```
🔑 Environment Variables
Create a .env.local file in the project root and add:
```bash
env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```
Key Features
AI-Driven Insights
Provides real-time feedback on your interview performance, highlighting strengths and areas for improvement.

User-Friendly Dashboard
Track your progress, access past interviews, and download detailed performance reports.

Interactive Questionnaires
Engage with diverse question types, including multiple-choice, scenario-based, and technical coding challenges.
---
Contributing
We welcome contributions to improve the project. Please feel free to fork the repository, create a pull request, or report any issues you encounter.




