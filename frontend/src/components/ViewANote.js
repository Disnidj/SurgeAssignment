import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function ViewANote()  {

    const[Title, setTitle] = useState("");
    const[Description , setDescription] = useState("");
   
    
    
    const id = useParams();
    

  

    const [viewnote] = useState({
      Title:"",
      Description:""
      })

     
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:8000/note/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setTitle(res.data.note.Title);
                setDescription(res.data.note.Description);
                
                
                
               
                
            
         })
            .catch(err => console.log(err));

           


          
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[]);

    return (
        <div >
        

        <div >
        <div style={{height:'150px', width:'1500px', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
            <br/>
            <br/>
            <h1 style={{color:'blue', textAlign:'center',fontSize:"50px",width:'100%'}}>VIEWER</h1>
            <br/><br/><br/>
        
                         <button className="btn btn-success" style={{marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3',marginTop:'-200px'}}>
                         <a href="/Notes" 
                         style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                         <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>


           </div>    
           <br/><br/><br/>
           <h1 style={{marginLeft:'600px'}}>Note About {Title}</h1>
           <br/><br/>
           <table style={{ width:'30%', marginLeft:'500px' , backgroundColor:'#D6ffff'}}>
           <div style={{marginLeft:'40px'}}>
             <tr>
               <td style={{fontSize:'20px'}}> <b> Title  </b></td>
             </tr>
             <tr>
               {Title}
             </tr>
             
             <br/><br/>
             <tr>
               <td style={{fontSize:'20px'}}> <b> Description  </b></td>
             </tr>
             <tr>
               {Description}
             </tr>
             </div>  
           </table>


        </div>
        </div>

    );
  }

