
import React, { Component } from 'react'
import home from '../../public/home.jpg';


export default class Home extends Component {

 



  render(){
    return (
     <div>
          <div>
            <center>

              <h1 style={{background:'#000080', color:'white',fontSize:'50px'}}> HOME PAGE </h1>
              <br></br>  

              <center>
              <div><img src={home} alt="evaluation" width="600" height="400" /></div>
              </center>
                <br></br>
          
              <button className="btn btn-success" style={{backgroundColor:'#3895d3', width:'180px', height:'50px', fontSize:'20px'}}><a href="/AdminLogin"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white'}}> 
                Admin Login</a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <button className="btn btn-success" style={{backgroundColor:'#3895d3',width:'180px', height:'50px', fontSize:'20px'}}><a href="/StudentLogin"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white'}}> 
                &nbsp;Student Login</a></button>

              <br></br><br></br><br></br><br></br><br></br><br></br>
                   

               </center>
           
           </div>  

        <div >

        <div >  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <div style={{backgroundColor:"#080523"}}>

            <div id="contact"  style={{backgroundColor:"#080523", color:"white"}}>
           <center><h1> Discover Your Future</h1> </center>

            <div className="row">
          
            <div className="col-md-4" style={{marginLeft:"650px"}}>
                
                <p>Colombo, Sri Lanka</p>
                <p>Phone: +00 1515151515</p>
                <p>Email: SLIIT@mail.com</p>
            </div>
            
            </div>
       
            </div>
        </div>
        </div>
    </div>
    
  </div>
    );
  }
}