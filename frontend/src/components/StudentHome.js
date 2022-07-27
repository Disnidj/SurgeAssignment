import React, { Component } from 'react';
import studenthome from '../../public/studenthome.jpg';

export default class A_Home extends Component {
  render() {
    return (
        <div style={{height:'150px', width:'100%', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
        <br/>
        <br/>
        <h1 style={{color:'blue', textAlign:'center',fontSize:"50px"}}>STUDENT HOME</h1>
        <br/>

        <div className="container" style={{marginLeft:"28%"}}>
            
        </div>
        
        
        <div>

         <nav className="navbar navbar-light navbar-expand-md bg-dark navigation-clean-search">
         <div className="container"><a className="navbar-brand" href="/" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Log Out</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
         <div className="container"><a className="navbar-brand" href="/Notes" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Notes</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
         <div className="container"><a className="navbar-brand" href="/UserProfile" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>User profile</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
         <div className="container"><a className="navbar-brand" href="/CreateUserProfile" style={{fontsize: '19px',color:'rgb(255,255,255)'}}>Create User Profile</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
    
        </nav>

    </div>

    <center>
            <div><img src={studenthome} alt="evaluation" width="600" height="500" /></div>
    </center>
    <br/>

    <footer class="page-footer font-small cyan darken-3" style={{backgroundColor:"black", marginTop:"0px",height:"170px", marginBottom:"-40px"}}>

    <div>

    <div class="row" style={{marginLeft:"700px",height:"100px"}}>

    <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" style={{paddingLeft:"10px"}}>
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="tw-ic"  style={{paddingLeft:"20px"}}>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="gplus-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="li-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
    
        <a class="ins-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        
        <a class="pin-ic" style={{paddingLeft:"20px"}}>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
        </a>
        </div>
    </div>

    </div>

    </div>

    <div class="footer-copyright text-center py-3" style={{color:"white"}}>© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> Surge Global</a>
    </div>

    </footer>
</div>

    )
  }
}
