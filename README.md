### SurgeAssignment
Fisrt lets see what is this application and why it created.

## A word about the Application
- This application is built accordint to a scenario that is given as for an assignment. 
- According to the scenario, application is used by two users knowns as **Admin** and **Student**.
- Admin can create a user and then send the creadential details to the Student. The creadentioals that admin 
has created are temperory. Once the user log in to the system using those tempory creadentials, user can 
create thier own user profile with a different password.
- Here, i thought to create an unique email and password for every user and send it to all students. So, for
the first time student login to the system, they all use a one email and one password. once they loged in, they can add thier 
own email and password and create a user account. i created the function in this way because of the 
email conflitcs may occured when creating user profiles by students.
- After validate all the details, students can submit there user profile details and starts to use there own creadentials.
Admin can view the user details of all system users.
- Once students log in successfully, they can create notes with a title and a description. they can delete
then as well as can view and update.

This is the main scenario of the application.

## Programming languages
- MERN Stack
- frontend- React js
- backend- Express js , Node js
- DataBAse - Mongo DB

## How to run the application
You can clone the repository to your computer and then give the command 
```
npm install
```
# further details, I'll mention all the dependancies with versions i have used for the application
-Backend
```
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.4.6",
    "node": "^17.7.2",
    "nodemon": "^2.0.15",
    "path": "^0.12.7",
    "react-router-dom": "^5.2.0",
    "uuid": "^8.3.2"
```
-Frontend
```
 "axios": "^0.27.2",
    "moment": "^2.29.4",
    "node": "^18.5.0",
    "parcel": "^2.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-script": "^2.0.5",
    "reactstrap": "^9.1.2",
    "sweetalert2": "^11.4.24",
    "web-vitals": "^2.1.4"
```
- Once installations are done for the front end and backed folders separatly, you can give
```
npm start
```
command to both directories.
- In the front end terminal , a link will desplay to the application.
- "ctrl + click " on that link will direct to the web application. 

## Apllication Navogations
- The fisrt page is the Home page that has to button , one for admin and the other for the student.
- By clicking on button, a user can go to the relevant login pages.
- After successfully log in, other functions ca be perform.


Thats all, i hope this description will be helpfull for you to understand the application. 















