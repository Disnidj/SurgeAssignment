import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import axios from 'axios';
import { GetUserByID , UpdateAdmin } from "../services/AuthServices";;



const UserProfile = () => {

  const [firstName, setfirstName] =useState('');
  const [lastName, setlastName] =useState(''); 
  const [ID, setID] = useState('');
  const [Email, setEmail] = useState('');
  const [dateOfBirth, setdateOfBirth]=useState(''); 
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [accountType, setaccountType] = useState(''); 
 
 

  const {id} = useParams();

  

 


  useEffect(function effectFunction() {
    console.log("get ID",id);
   axios.get(`http://localhost:8000/user/getUserById/${id?.id}`)
   .then(res=>{
       console.log("data",res);
       setfirstName(res.data.user.firstName);
       setlastName(res.data.user.lastName);
       
       
       
      
       
   
})
   .catch(err => console.log(err));

  


 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);







  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div>
        <center>
        
            <div style={{ width: "600px" }}>
              <table>
                <tr>
                First Name:
                {firstName}
                </tr>
                <tr>
                Last Name:
                {lastName}
                </tr>
                <tr>
                ID:
                {ID}
                </tr>
                <tr>
                Email:
                {Email}
                </tr>
                <tr>
                Date Of Birth:
                {dateOfBirth}
                </tr>
                <tr>
                Phone Number:
                {PhoneNumber}
                </tr>
                <tr>
                Password:
               {Password}
               </tr>
               <tr>
                Account Type:
                {accountType}
                </tr>




                
              </table>
            </div>
         
        </center>
      </div>
    </div>
  );
};

export default UserProfile;

