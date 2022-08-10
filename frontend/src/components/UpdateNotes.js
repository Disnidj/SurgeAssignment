import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function UpdateNotes()  {

    const[Title, setTitle] = useState("");
    const[Description , setDescription] = useState("");
  
    
    const id = useParams();
    

  

    const [noteupdate] = useState({
        
        Title:"",
        Description:""
      })

      const changeOnClick = async (e) =>{
        e.preventDefault();
   
        console.log("data");
       
        const formData = new FormData();
   
        formData.append("Title",Title);
        formData.append("Description",Description);
        
        
        
      
   
        setTitle("");
        setDescription("");
     
        
        
        console.log(formData.get('Title')); 

      
        noteupdate.Title=formData.get('Title');
        noteupdate.Description=formData.get('Description');
       
      
            
 
         console.log(noteupdate);
      

         console.log(id)
         await axios.put(`http://localhost:8000/note/update/${id?.id}`,noteupdate)
         .then(res=>{
             console.log("return data",res);
            alert("Update Successfull!!");
         })
         .catch(err=>{
             alert("update failed")
             console.log(err);
         });

        }
        

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
            <h1 style={{color:'blue', textAlign:'center',fontSize:"50px",width:'100%'}}>UPDATE NOTES</h1>
            <br/>
        
                         <button className="btn btn-success" style={{marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3',
                         marginTop:'-90px'}}>
                         <a href="/Notes" 
                         style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                         <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>


           <br></br> 
           </div>  



                       

         

        <br></br> <br></br> 
<div className="col-md-8 mt-4 mx-auto">
        <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>
        
                <div className="form-group">
                <h2>Title</h2>
                     <input type="text"
                     className="form-control"
                     name="Title"
                     onChange={e => setTitle(e.target.value)}
                     value={Title}
                    
                     />
                 </div>

                 <div className="form-group">
                   <h2>Description</h2>
                     <input type="text"
                     className="form-control"
                     name="Description"
                     onChange={e => setDescription(e.target.value)}
                     value={Description}  
                     
                   />
                    <br/><br/>
                 </div>
                

                
                

                 </form>
                 <br/><br/>
                 </div>
                        <button className="btn btn-success" type="submit" style={{marginTop:'15px', width:"250px", 
                        marginLeft:"650px",backgroundColor:"#0147ab"}} onClick={(e)=>changeOnClick(e)} >
                            <i className="far fa-check-square"></i>
                            &nbsp; Save

                        </button>

                       

                       
        </div>
        </div>

    );
  }
