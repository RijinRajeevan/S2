# Car Rental System (Java Swing + PostgreSQL)

This is a **mini project** for Semester 2, developed in **Java** using **Swing for GUI** and **PostgreSQL** as the database.  
It demonstrates the use of **OOP concepts** and basic **database integration**.

## Features
- **Admin Portal**
  - Add Cars
  - View All Cars
  - Remove Cars
- **Customer Portal**
  - View Available Cars
  - Book Cars

## Tech Stack
- Java (Swing GUI)
- PostgreSQL (Database)
- JDBC (Connectivity)

## How to Run
1. Setup a PostgreSQL database named `car_rental`.
2. Create a `cars` table with fields: `id`, `brand`, `model`, `price_per_day`, `available`.
3. Compile and run the project:
   ```bash
   javac carrental/*.java
   java carrental.MainMenuGUI

