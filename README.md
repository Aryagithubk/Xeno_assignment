# 📦 Customer Segmentation & Campaign Management

A full-stack web application for segmenting customers based on RFM (Recency, Frequency, Monetary) values and demographic rules (like age, city, gender), allowing admins to create and track marketing campaigns.

---

## 🧠 Features

### ✅ Frontend (React.js)
- 🎯 **Segment Builder** – Create customer segments based on:
  - Fields: `age`, `gender`, `city`
  - Operators: greater than, less than, equal to
- 📊 **RFM Filter Form** – Filter customers by:
  - `Recency` (days <)
  - `Frequency` (visits >)
  - `Monetary` (spend >)
- 👥 **Customer List** – View and select filtered customers
- 📤 **Campaign Form** – Submit campaigns with selected customers
- 📚 **Campaign Logs** – View submitted campaigns and customer count

### 🔧 Backend (Node.js + Express + MongoDB)
- 🧾 **Customers API** – Fetch and filter customer data
- 📩 **Campaign API** – Save campaigns with selected customer IDs
- 🗂️ **MongoDB Database** – Stores customers and campaigns

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aryagithubk/Xeno_assignment


2️⃣ Backend Setup

cd backend
npm install

⚠️ Configure your MongoDB URI inside config/db.js.

npm start

3️⃣ Frontend Setup

cd ../frontend
npm install
npm start

Frontend runs on: http://localhost:3000

🛠️ API Endpoints
Customers
GET /api/customers – Returns all customers

Campaigns
GET /api/campaigns – Returns all campaigns

POST /api/campaigns – Creates a new campaign with selected customer IDs



