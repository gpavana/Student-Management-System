
# 🧑‍🎓 Student Management System

This is a full-stack **Student Management System** application developed using **React** for the frontend and **Spring Boot** for the backend. It allows users to manage student data through features like adding, editing, viewing, and deleting student records.

---

## 🌟 Features

- Add new student records
- Edit existing student details
- Delete students
- View student list with:
  - ID
  - Roll Number
  - Name
  - Email
  - Phone Number
  - Department
- Responsive and clean UI
- Real-time update on changes

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Axios
- HTML & CSS

### Backend

- Java
- Spring Boot
- Spring Data JPA (ORM)
- MySQL
- Maven

---

## 📁 Project Structure

```
student-management-system/
│
├── frontend/            # React frontend (item-crud-frontend)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/             # Spring Boot backend (mysping-app)
│   ├── src/
│   ├── pom.xml
│   └── ...
│
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-management-system.git
cd student-management-system
```

---

## ⚛️ Frontend Setup (React)

### Prerequisites

- Node.js and npm installed

### Steps

```bash
cd frontend
npm install
npm start
```

The frontend will run at:  
📍 `http://localhost:3000`

---

## 🔧 Backend Setup (Spring Boot)

### Prerequisites

- Java (JDK 8 or above)
- MySQL
- Maven

### Steps

1. Open MySQL and create a database named `studentdb`.
2. Update `application.properties` inside `backend/src/main/resources` with your DB credentials.
3. Run the Spring Boot application using:

```bash
cd backend
./mvnw spring-boot:run
```

The backend will run at:  
📍 `http://localhost:8080`

---

## 🧠 Notes

- Ensure backend is running before using the frontend.
- You can reset auto-increment in MySQL using:
  ```sql
  ALTER TABLE students AUTO_INCREMENT = 1;
  ```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
