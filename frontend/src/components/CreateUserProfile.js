import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterCustomer} from '../services/AuthServices';

const Register = () => {

  const navigate = useNavigate();

  const [firstName, setfirstName] =useState('');
  const [lastName, setlastName] =useState(''); 
  const [ID, setID] = useState('');
  const [Email, setEmail] = useState('');
  const [dateOfBirth, setdateOfBirth]=useState(''); 
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [accountType, setaccountType] = useState(''); 
  const [status, setstatus]= useState('');

  //validation
  const [error, setError] = useState(null);
  const [errorPass, setErrorPass] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
 
  
  
 //email validation check
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //Validations
  const handlefirstName = (e) => {
    setfirstName(e.target.value);

    if (Number(e.target.value)) {
      alert("Onlu letters are valid");
    }
  };

  const handlelastName = (e) => {
    setlastName(e.target.value);
    if (Number(e.target.value)) {
      alert("Only letters are valid");
    }
  };

  const handleID = (e) => {

    setID(e.target.value);
        
      if (!Number(e.target.value)) {
        alert("ID must be numbers");
      }
    
    
  };

  const handleEmail = (e) => {

    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };
 
  const handledateOfBirth = (e) => {
    setdateOfBirth(e.target.value);
  };

  const handlePhoneNumber = (e) => {

    if (e.target.value.length>10) {
      setErrorPhone('Invalid Phone number');
    } else {
      setErrorPhone(null);
    }


    setPhoneNumber(e.target.value);
  };

  const handlePassword = (e) => {

    if (e.target.value.length<6) {
      setErrorPass('Password is not strong enough');
    } else {
      setErrorPass(null);
    }
 
    setPassword(e.target.value);
    
  };

  const handleaccountType = (e) => {
    setaccountType(e.target.value);
  };

  const handlestatus = (e) => {
    setstatus(e.target.value);
  };
  

  //Submit the input data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName === '' || lastName ==='' || ID === '' || Email === ''|| dateOfBirth ===''|| PhoneNumber === '' || Password === '' || accountType === '' ||status ==='' ) {
        alert("Fill all the data");
    } else {
        let newdata = {

          firstName:firstName,
          lastName:lastName, 
          ID:ID, 
          Email:Email, 
          dateOfBirth:dateOfBirth, 
          PhoneNumber:PhoneNumber, 
          Password:Password, 
          accountType:accountType, 
          status:status 

        }
        let cusdata =  await RegisterCustomer(newdata);
        console.log("return data",cusdata);
        localStorage.setItem("token",cusdata.data.token);
        localStorage.setItem("userRole",cusdata.data.userRole);
        navigate('/StudentLogin');
    }
  };
 


  return (
    <div>
            <center>
            <div style={{marginTop:"30px", backgroundColor: "#ADD8E6" , height:"40px"}}>
            <center><h1 style={{color:"blue", fontSize:"50px"}}><b>CREATE USER PROFILE</b></h1></center> 
        
        
            </div>
            <br/>
          
            </center>

             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
              <div className="container"><a className="navbar-brand" href="/StudentHome" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Home</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
              <div className="container"><a className="navbar-brand" href="/AdminLogin" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Admin Login</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
              <div className="container"><a className="navbar-brand" href="/StudentLogin" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Student Login</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

              <button className="btn btn-success" style={{width:'200px',backgroundColor:'#3895d3'}}><a href="/StudentHome" 
                      style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                      <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>
         
             <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
            
            </nav>
   
                  {/* students' Pages 
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a>  
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page"> student</a>   
                  <a style={{display:localStorage.getItem("userRole") == "user" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">student</a> 
                  */}
                  </div>
                </div>
             </div>
          </nav>

        <center>
         <div style={{backgroundColor:'#b3e5fc' , width :'800px', marginTop:'70px'}}>

          <br/><br/>

        <center>
          <table width = "500">
            <tr>
                <th>
                  <center>
                  <h1 style={{color:""}}>Registration</h1></center>
                  <br/><br/>
                  <form>
             
                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Fisrt Name: </label>
                            <input type="text"
                            className="form-control"
                            value={firstName}
                            onChange={handlefirstName}
                            placeholder="Enter your fisrt name "
                        
                                />
                             </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Last Name: </label>
                            <input type="text"
                            className="form-control"
                            value={lastName}
                            onChange={handlelastName}
                            placeholder="Enter your last name "
                        
                                />
                             </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Student ID: </label>
                            <input type="text"
                            className="form-control"
                            name={ID}
                            value={ID}
                            onChange={handleID}
                            placeholder="enter your ID"
                        
                                />
                             </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Email Address: </label>
                            <input type="text"
                            className="form-control"
                            value={Email}
                            onChange={handleEmail}
                            placeholder="enter Your email adress"
                        
                                />
                            <br></br>
                            {error && <h2 style={{color: 'red' , fontSize:'15px'}}>{error}</h2>}
                            
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Date of Birth: </label>
                            <input type="date"
                            className="form-control"
                            value={dateOfBirth}
                            onChange={handledateOfBirth}
                            placeholder="Enter your Birth Day "
                        
                                />
                             </div>


                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Contact Number: </label>
                            <input type="text"
                            className="form-control"
                            value={PhoneNumber}
                            onChange={handlePhoneNumber}
                            placeholder="enter a contact number"
                        
                                />
                            {errorPhone && <h2 style={{color: 'red' , fontSize:'15px'}}>{errorPhone}</h2>}
                            </div>
          

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>  Password: </label>
                            <input type="text"
                            className="form-control"
                            value={Password}
                            onChange={handlePassword}
                            placeholder="create a password (should be at least 6 charactors)"
                            
      
                                />
                            {errorPass && <h2 style={{color: 'red' , fontSize:'15px'}}>{errorPass}</h2>}
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Account Type: </label>
                            <input type="text"
                            className="form-control"
                            value={accountType}
                            onChange={handleaccountType}
                            placeholder="Enter your account type "
                        
                                />
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{margineBottom:'5px'}}>Status </label>
                            <input type="text"
                            className="form-control"
                            value={status}
                            onChange={handlestatus}
                            placeholder="Enter your status "
                        
                                />
                            </div>
               
          
          
                            <center>
                            <button onClick={handleSubmit} className="btn btn-primary btn-lg active" type="submit">
                            Create
                            </button>
                            </center>
                  </form>        
                  <br/>
                              
   
               </th>
             </tr>
          </table>
        </center>
       </div>
       </center>
    </div>
  )
};

export default Register;