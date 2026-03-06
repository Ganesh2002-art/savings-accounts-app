# Savings Accounts React Native App

A simple mobile application built with **React Native (Expo)** that displays savings account products fetched from a REST API.
Users can navigate between different savings accounts and view their interest rates and minimum deposit requirements.

---

## 📱 Features

* Fetch savings account data from a REST API
* Display account information in a clean card UI
* Navigate between products using previous/next links
* Responsive layout for **Android and iOS**
* Built with **React Native using Expo**

---

## 🛠 Tech Stack

* React Native
* Expo
* JavaScript
* REST API
* React Hooks (useState, useEffect)

---

## 🌐 API Used

Account data is fetched from:

https://srest.com/accounts.json

Example response:

```json
[
  {
    "product": "Fixed Saver",
    "interest": 2.2,
    "minimum": 500,
    "type": "Fixed"
  },
  {
    "product": "Flex Saver",
    "interest": 1.5,
    "minimum": 0,
    "type": "Tracker"
  },
  {
    "product": "Offset Saver",
    "interest": 1.8,
    "minimum": 1000,
    "type": "Fixed"
  }
]
```

---

## 📂 Project Structure

```
savings-accounts-app
│
├── components
│   ├── AccountCard.js
│   └── Navigation.js
│
├── screens
│   └── SavingsAccountsScreen.js
│
├── services
│   └── api.js
│
├── constants
│   ├── colors.js
│   └── styles.js
│
├── App.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```
git clone https://github.com/Ganesh2002-art/savings-accounts-app.git
```

2️⃣ Navigate into the project

```
cd savings-accounts-app
```

3️⃣ Install dependencies

```
npm install
```

4️⃣ Start the Expo development server

```
npx expo start
```

---

## 📱 Running the App

You can run the app using:

* **Android Emulator**
* **iOS Simulator**
* **Expo Go mobile app**

Scan the QR code displayed in the terminal to open the app in Expo Go.

---

## 🧠 Implementation Details

* Account data is fetched using **fetch API**
* State management is handled using **React Hooks**
* Navigation between accounts is implemented using **index-based state updates**
* Components are separated for better **code organization and reusability**

---

## 📸 App Preview

Savings Accounts screen displaying account details and navigation between products.

---

## 👨‍💻 Author

Ganesh Devana
React Native / MERN Stack Developer

---

## 📄 License

This project was developed as part of a coding assignment.
