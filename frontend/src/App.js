import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import CreateUserProfile from './components/CreateUserProfile';
import StudentLogin from './components/StudentLogin'; 
import AdminLogin from './components/AdminLogin';   
import AdminHome from './components/AdminHome'; 
import Viewallusers from './components/Viewallusers'; 

import UserProfile from './components/UserProfile';
import AdminCreateUser  from './components/AdminCreateUser';
import MailPage from './components/MailPage';
import StudentHome from './components/StudentHome';

import Notes from './components/Notes';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import UpdateNote from './components/UpdateNote';

import UpdateNotes from './components/UpdateNotes';
import ViewANote from './components/ViewANote';


export default function App() {
  return (
    <div className="App">
    <Router>

      <Routes>

                <Route    index element = {<Home/>}/>  
                <Route    path = "/CreateUserProfile" element = {<CreateUserProfile/>}/>
                <Route    path = "/StudentLogin" element = {<StudentLogin/>}/>  
                <Route    path = "/AdminLogin" element = {<AdminLogin/>}/>              
                <Route    path = "/Viewallusers" element = {<Viewallusers/>}/>
                <Route    path="/AdminHome" element={<AdminHome/>}/>
                <Route    path="/UserProfile" element={<UserProfile/>}/>
                <Route    path="/AdminCreateUser" element={<AdminCreateUser/>}/>
                <Route    path="/MailPage" element={<MailPage/>}/>
                <Route    path="/StudentHome" element={<StudentHome/>}/>
                <Route    path="/Notes" element={<Notes/>}/>
                <Route    path="/addNote" element={<AddNote/>}/>
                <Route    path="/ViewNote" element={<ViewNote/>}/>
                <Route    path="/UpdateNote" element={<UpdateNote/>}/>
                <Route    path="/UpdateNotes/:id" element={<UpdateNotes/>}/>
                <Route    path="/ViewANote/:id" element={<ViewANote/>}/>

                


              
       

                
   </Routes>

</Router>
</div>
);
}