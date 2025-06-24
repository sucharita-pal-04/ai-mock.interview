# AI Mock Interview 🎤🤖

**AI Mock Interview** is an innovative web application designed to simulate real-world mock interviews using AI. With seamless user authentication, an intuitive interface, and integration with Google Gemini AI, this project is your ultimate preparation tool for job interviews.

> **Deployed On:** [ai-mock-interview-3c799.web.app](https://ai-mock-interview-3c799.web.app)

> **GitHub Profile:** [sucharita-pal-04](https://github.com/sucharita-pal-04)

---

## 🔥 Features

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

echo "🔧 Starting AI Mock Interview Project Setup..."

# Step 1: Clone the Repository
echo "📥 Cloning the repository..."
git clone https://github.com/sucharita-pal-04/ai-mock-interview.git

# Step 2: Navigate to Project Directory
cd ai-mock-interview || { echo "❌ Directory not found!"; exit 1; }
echo "✅ Entered project directory."

# Step 3: Install pnpm Globally
echo "🌐 Installing pnpm globally..."
npm install -g pnpm

# Step 4: Install Project Dependencies
echo "📦 Installing project dependencies..."
pnpm install

# Step 5: Firebase Initialization
echo "🔥 Initializing Firebase project..."
firebase init

# Step 6: Start Development Server
echo "🚀 Starting the development server..."
pnpm run dev

echo "🎉 Project setup complete! Visit http://localhost:5173 to view the app."

echo "🔑 Don't forget to create your '.env.local' file with all environment variables."

echo "--------------------------------------"
echo "Example .env.local file:"
echo "VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key"
echo "VITE_FIREBASE_API_KEY=your_firebase_api_key"
echo "VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain"
echo "VITE_FIREBASE_PROJECT_ID=your_firebase_project_id"
echo "VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket"
echo "VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id"
echo "VITE_FIREBASE_APP_ID=your_firebase_app_id"
echo "VITE_GEMINI_API_KEY=your_gemini_api_key"
echo "--------------------------------------"

echo "✅ All Set! Happy Coding 🎯"
