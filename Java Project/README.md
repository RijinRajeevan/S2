# 🚗 Car Rental System

A robust and user-friendly **Car Rental System** built with **Java (Swing)** and **PostgreSQL**. This application allows customers to browse available cars, book rentals, and provides an admin panel for managing the car fleet.

## ✨ Features

### 👤 Customer Features
-   **Browse Cars**: View a list of available cars with details like Brand, Model, and Price per Day.
-   **Book a Car**: Select a car and specify rental duration to get an instant cost calculation.
-   **Receipt Generation**: Get a detailed booking receipt upon successful reservation.

### 🛡️ Admin Features
-   **Secure Login**: Authentication system for administrators.
-   **Fleet Management**: Add new cars to the system, remove old ones, and update availability.
-   **Dashboard**: View all cars and their current status.

## 🛠️ Technology Stack

-   **Language**: Java (JDK 21+)
-   **GUI Framework**: Java Swing
-   **Database**: PostgreSQL
-   **Driver**: PostgreSQL JDBC Driver (`postgresql-42.7.6.jar`)

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   [Java Development Kit (JDK) 21+](https://www.oracle.com/java/technologies/downloads/)
-   [PostgreSQL](https://www.postgresql.org/download/)
-   [VS Code](https://code.visualstudio.com/) (Recommended)

### 📥 Installation & Setup

1.  **Clone the Repository** (or download the source code):
    ```bash
    git clone https://github.com/yourusername/CarRentalSystem.git
    cd CarRentalSystem
    ```

2.  **Database Configuration**:
    -   Ensure PostgreSQL is running on `localhost:5432`.
    -   Create a database named `car_rental` (optional, the script uses the default connection).
    -   Update database credentials in `src/carrental/DBConnection.java` if yours differ from:
        -   **User**: `postgres`
        -   **Password**: `root`

3.  **Initialize Database**:
    Run the provided SQL script to create the necessary tables and dummy data.
    -   Execute `setup.sql` in your PostgreSQL query tool (like pgAdmin) or via CLI.

### 🏃‍♂️ Running the Application

1.  **Compile the Project**:
    Open a terminal in the project root and run:
    ```bash
    javac -cp "lib/postgresql-42.7.6.jar" -d bin src/carrental/*.java
    ```

2.  **Start the App**:
    ```bash
    java -cp "bin;lib/postgresql-42.7.6.jar" carrental.Main
    ```

## 📸 Usage Guide

1.  **Launch the App**: You will be greeted by the Main Menu.
2.  **Admin**: Click "Admin Login". Use credentials:
    -   User: `Cardealer`
    -   Pass: `Carrental123`
3.  **Customer**: Click "Customer Portal", enter your name, and start booking!

---

*Developed for OOPS in Java Project - S2 Semester*

