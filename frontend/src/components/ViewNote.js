/* eslint-disable no-useless-concat */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';

export default class ViewNote extends Component {
   
   constructor(props){
       super(props);

       this.state={
           note:{}

       };


   }
      
  //retrieve special data
  
    retrievePosts(){
      axios.get("http://localhost:8000/allNotes").then(res=>{
        if(res.data.success){
          this.setState({
            Notes:res.data.existingNotes
          });
        console.log(this.state.note);
  
        }
      });
    }



//get One data
   componentDidMount(){
       const id = this.props.match.params.id;

       axios.get(`http://localhost:8000/note/${id}`).then((res)=>{
           if(res.data.success){
               this.setState({
                   note:res.data.note
               });

               console.log(this.state.note);
           }
       });

       this.retrieveNotes();
  
   }
   

   


   
    render() {

       const {Title,Description}=this.state.note;

        return (
        <div>
            <div >

            <div>

                
                <h4 style={{fontSize:'40px'}}><center>Your Note Details</center></h4>

                <button className="btn btn-success" style={{marginLeft:'800px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                <a href="/StudentHome" 
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button> 

                <hr />

                <dl className="row" style={{fontSize:'22px'}}>
                    <dt className="col-sm-3">Title:</dt>
                    <dd className="col-sm-9">{Title}</dd>

                    <dt className="col-sm-3">Description:</dt>
                    <dd className="col-sm-9">{Description}</dd>

                
                     </dl>

                 </div>           
                 
    
            </div>
       
            
        </div>        
            
        )
    }
}
