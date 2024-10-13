# Task-Management

This task management application built using .NET Core for the backend and React for the frontend. 
This app allows users to manage the curd opertions.

# Prerequisites
 1. .Net Framework 8.0
 2. Node.js v20.12.1
 3. SQL Server
    
# Backend Technologies:
1. .NET Core: API development and server-side logic.
2. Entity Framework Core: ORM for database interactions.
3. SQL Server: Relational database for task data.

# Frontend Technologies
1. React with Vite
2. Tailwind Css
3. React Hooks

# Backend Setup Steps
1. Clone the repository
2. Change the connection string in API project eg. TaskManagementApp -> appsettings.json
3. Restore dependencies: dotnet restore
4. Update the database: dotnet ef database update
5. Run project: dotnet run

# Frontend Setup Steps 
1. Clone the repository
2. Go to root of frontend application eg. task-management-frontend
3. Run command: npm install
4. start project command: npm run dev
