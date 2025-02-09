# 🐶 Fetch Dog Adoption Website

Welcome to the **Fetch Dog Adoption** project! 🐾 This React-based web app helps dog lovers search through a database of shelter dogs to find their perfect match. Users can filter by breed, sort results, and favorite dogs before generating an adoption match.

## 🚀 Live Demo

👉 [Deployed Website URL](#) _(https://vercel.com/siddhu2427s-projects/fetch-dog-search)_

## 📂 Repository

🔗 [GitHub Repository](#) _(https://github.com/siddhu2427/Fetch-Dog-Search.git)_

---

## 🛠 Features

- ✅ **User Authentication**: Users log in with their name & email.
- ✅ **Dog Search**: Browse available dogs with filtering & sorting options.
- ✅ **Favorites List**: Save favorite dogs for easier selection.
- ✅ **Pagination**: Navigate through search results easily.
- ✅ **Dog Match Generator**: Find a perfect match from favorites.
- ✅ **Styled Components**: Clean and responsive UI.

---

## 🏗 Project Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/siddhu2427/Fetch-Dog-Search.git
cd fetch-dog-search
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm start
```

The app will be available at **`http://localhost:3000`**.

---

## 🛠 API Reference

This project interacts with the **Fetch API** for dog adoption services.

### **🔐 Authentication**

- **Login:** `POST /auth/login`
- **Logout:** `POST /auth/logout`

### **🐶 Dog Search**

- **Get Breeds:** `GET /dogs/breeds`
- **Search Dogs:** `GET /dogs/search`
- **Get Dog Details:** `POST /dogs`
- **Find a Match:** `POST /dogs/match`

More details can be found in [Fetch API Docs](https://frontend-take-home-service.fetch.com).

---

## 🌐 Deployment

This project is deployed on ** Vercel ** (Choose one and update accordingly).

### **Deploying Manually**

```sh
npm run build
```

Upload the `build/` folder to your hosting platform.

### **Deploying to Vercel**

```sh
vercel deploy
```

---

## 🤝 Contribution

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

---

## 🐾 Happy Dog Searching! 🐶🎉
