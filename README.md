# Code Reviewer 🔍💻

A full-stack web application that reviews your code using the Google Gemini AI API. The app allows users to input code, which is then analyzed by the AI model to provide feedback and suggestions.

---

## 🚀 Features

- 📦 **Frontend**: Built with **React + Vite** for a fast, modern development experience.
- ⚙️ **Backend**: Developed using **Node.js** with **Express.js** to handle API requests securely.
- 🤖 **Google Gemini AI Integration**: The backend connects to the Gemini API to process and review code submissions.
- 🔒 API keys and sensitive configurations are securely stored using environment variables.

---

## 📂 Project Structure
```text
Code-Reviewer/
├── Backend/
│   ├── index.js
│   ├── package.json
│   ├── .env               # Contains Gemini API key
│   └── ...                # other backend files & folders
│
├── Frontend/
│   ├── index.html
│   ├── src/
│   │   └── ...            # React components and files
│   ├── package.json
│   └── ...                # other frontend files & folders
│
├── .gitignore
├── README.md
└── ...
```
---

## 🔐 Environment Variables

Create a `.env` file inside your `Backend/` folder with the following content:
GEMINI_API_KEY=your_gemini_api_key_here

**Important:**  
Never expose your `.env` or API keys in public repositories. The `.gitignore` ensures this file is not pushed to GitHub.

---

## 🛠️ How to Run the Project

### 📦 Backend Setup

```bash
cd Backend
npm install
npm run dev
```
Your package.json in Backend should have this:
```bash
"scripts": {
  "start": "nodemon index.js"
}
```
 The backend server will run on http://localhost:5000 (or your configured port).

## ⚛️ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## 📌 Dependencies
**Frontend:**
- React-Vite

**Backend:**
- Node.js
- Express.js
- dotenv
- axios (for making requests to Gemini API)

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
This project is open source under the MIT License.

## 📧 Contact
**Made by Abhay Rathore 🚀**  
Feel free to connect and collaborate!
