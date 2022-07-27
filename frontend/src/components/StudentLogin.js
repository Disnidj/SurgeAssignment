import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginCustomer } from "../services/AuthServices";
import studentlogin from '../../public/studentlogin.jpg';

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		Email: "",
		Password: "",
	});

	const { Email, Password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginCustomer(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("userRole",data.data.userRole);
            navigate("/StudentHome");

        }
        else
        {
            alert("Error occured !  Login credentials wrong...");
        }
	};


	return (
		<div>
		<center>
      	<div >
		  <center>
			<div style={{height:'150px', width:'100%', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
			<br/>
			<br/>
			<h1 style={{color:'blue', textAlign:'center',fontSize:"50px"}}>STUDENT LOGIN PAGE</h1>
			<br/><br/><br/>
			</div>
		  </center>
        </div>
      	</center>
		<br/><br/>
		
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" style={{marginLeft:'300px'}} href="/">Home</a>
					<a className="navbar-brand" style={{marginLeft:'800px'}} href="/StudentLogin">Student Login</a>
						
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
						aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					
					</div>
					</div>
				</div>
			</nav>	

		<br/>
		

<table>
	<tr>
		<td>
		<div style={{marginRight:'0px'}}><img src={studentlogin} alt="evaluation" width="700" height="500" /></div>
				
		</td>


		<td>
		<div className="login-form" style={{backgroundColor:'#b3e5fc', width:'500px',marginLeft:'200px', marginTop:'90px'}}>
            <center>
			<h1 className="heading">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Student Login
			</p>
			<br />
			<table>
				<tr>
					<th>
						<form onSubmit={(e) => onSubmit(e)}>
						<div className="form-group" style={{marginBottom:'15px'}}>
						<label style={{margineBottom:'5px'}}>Enter Email Address : </label>
								<input
									type="Email"
									className="form-control" 
									placeholder="Email Address"
									name="Email"
									value={Email}
									onChange={(e) => onChange(e)}
									required
								/>
								</div><br/>
								<div className="form-group" style={{marginBottom:'15px'}}>
								<label style={{margineBottom:'5px'}}>Enter Password : </label>
									<input
										type="password"
										className="form-control" 
										placeholder="Password"
										name="Password"
										minLength="6"
										value={Password}
										onChange={(e) => onChange(e)}
										required
									/>
								</div><br/>
                                <center>
								<input type="submit" className="btn btn-primary btn-lg active" value="Login" />
                                </center>
            
                                </form><br/>
                                </th>
                                </tr>
                                </table>
                                
                                </center>
			
		</div>
		</td>
		</tr>
</table>

		</div>
	
	);
};

export default Login;