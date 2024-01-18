Technologies that I have to use: 
1. Ant Design 
2. RTK Query /Redux persist 
3. Sass
4. Axios 
5. Vite
6. Typescript
7. reactHookForm / Zod

---------------------------------------------
🟢 Pages 🟢
1. Login
2. Home Page -> Sidebar
3. Reports 
4. Teams 
5. Projects 
6. Users 
7. ChangePassword
----------------------------------------------

🟣 Login Page 🟣
Inputs: Username and password

🟣 Home Page 🟣
charts, bars, etc.

🟣 Reports Page 🟣
Inputs/Create: Title, Desc and Projects (select-box) (Rich-text editor)
Inputs/Edit: Title, Desc and Projects (select-box) (Rich-text editor)
Delete: ReportID
🔺 An Admin cannot create a Report, but can edit and delete Reports. 
🔺 An User can create Reports. 
🔺 All Roles can enter this page.
🔺 Filter feature: Started and Ended Date.

🟣 Teams Page 🟣
Inputs/Create: Teamname 
Inputs/Edit: Teamname 
Delete: TeamID
🔺 Only Admin and Head can enter this page.

🟣 Projects Page 🟣
Inputs/Create: ProjectName 
Inputs/Edit: ProjectName 
Delete: ProjectID
🔺 Users cannot see this page. 
🔺 Admin and Super can create Projects.

🟣 Users Page 🟣
Inputs/Create: Name, Username, Lastname, Email, Password, TeamID (Optional), RoleID (select-box), Status (Avtomatik 'Active' olacaq - Bunu Backend teref edecek). 
Inputs/Edit: ProjectName 
🔺 Filter feature: TeamName, Name, Lastname, Status.
🔺 Filter feature -> A Head can use this feature.
🔺 Users cannot enter UserPage.
🔺 In the UserEdit (Page or Modal) the SuperAdmin can chnage an User's RoleID. And only the SuperAdmin has this permission. 
🔺 An Admin has permission to edit and delete Users.

🟣 ChangePassword Page 🟣
Inputs: OldPassword and NewPassword
🔺 If a user can remember their password, then they can change it. Otherwise, they need to ask the SuperAdmin or an Admin to reset it. 


➕ Sidebar
➕ Navbar -> ChangePassword Iconu (KeyIcon).
➕ ResetPassword feature which only Admin and SuperAdmin have permission to do it: 'ResetUserPassword' -> If a user cannot remember their password, then they can ask the SuperAdmin and Admin to reset their password.
➕ A project can only be created once. 
➕ A user can change their password, add daily reports, and update them within 24 hours. 
➕ The SuperAdmin can create Admins (only the SuperAdmin is able to do this).
➕ The SuperAdmin can delete and update Admins.
➕ Redirect to pages based on RoleId.
➕ Head's job is only observation, nothing else.


🟥 Essentials 🟥
- .env - This file cannot be pushed to a repo. It has to be a private file.
- Using 'customHooks' is not allowed. 


🔹 Storing the hours of a day and sending requests after 1 hour. In the last 10 minutes before 12:00PM, a warning will be displayed "You have only 10 minutes for updating today's reports". 


🔰 MY TASKS: 
- Protected Routes
- Interceptors
- .env
- axios errorhandling