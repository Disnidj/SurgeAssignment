import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterCustomer} from '../services/AuthServices';
import create from '../../public/create.jpg';

const Register = () => {

  const navigate = useNavigate();

//set usestates
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  //error handlying for validation
  const [error, setError] = useState(null);
  const [errorPass, setErrorPass] = useState(null);

//email validation
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //validation
  const handleEmail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };
 
  const handlePassword = (e) => {

    if (e.target.value.length<6) {
      setErrorPass('Password is not strong enough');
    } else {
      setErrorPass(null);
    }

    setPassword(e.target.value);
  };

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Email === ''|| Password === ''  ) {
        alert("Fill Both feilds");
    } else {
        let newdata = {

          
          Email:Email, 
          Password:Password, 
          

        }
        let cusdata =  await RegisterCustomer(newdata);
        console.log("return data",cusdata);
        localStorage.setItem("token",cusdata.data.token);
        localStorage.setItem("userRole",cusdata.data.userRole);
        navigate('/MailPage');
    }
  };
 


  return (
    <div>
            <center>
              <div style={{height:'150px', width:'100%', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
              <br/>
              <br/>
              <h1 style={{color:'blue', textAlign:'center',fontSize:"50px"}}>CREATE A NEW USER</h1>
              <br/>

              <div className="container" style={{marginLeft:"28%"}}>
                  
              </div>
              </div>
              <br/>
              
            </center>

            <br/>

            <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
            <div className="container"><a className="navbar-brand" href="/AdminHome" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>HOME</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
            <div className="container"><a className="navbar-brand" href="/StudentLogin" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Student Login</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
            <div className="container"><a className="navbar-brand" href="/" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Log Out</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
    

             {/* admin' Pages 
                      <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                      <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a>  
                      <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                      <a style={{display:localStorage.getItem("userRole") == "admin" ?"flex":"none"}} className="nav-link active" href="/" aria-current="page">admin</a> 
                    */}
            </nav>

           
    
                   
                      
                   
        <div>
           <br/><br/>
           
            <table >
             
                <tr>
                  <td>
                  <div><img src={create} alt="evaluation" width="600" height="500" /></div>
              
                  </td>

                  <td>
                    <div>

                    <form style={{marginLeft:'200px' , width:"450px"}}>
                      <h1 style={{color:""}}>CREATE</h1>
                      <br/><br/>

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
                              <label style={{margineBottom:'5px'}}>  Password: </label>
                              <input type="text"
                              className="form-control"
                              value={Password}
                              onChange={handlePassword}
                              placeholder="create a password (should be at least 6 charactors)"
                          
                                  />
                              {errorPass && <h2 style={{color: 'red' , fontSize:'15px'}}>{errorPass}</h2>}
                              
                              </div>

            
                                
                              <button onClick={handleSubmit} className="btn btn-primary btn-lg active" type="submit">
                                 Register
                              </button>
                              
                    </form>        
                    <br/>
                                
    
                    </div>
            </td>
            
          </tr>
        </table>
            
      </div>
    </div>
  )
};

export default Register;