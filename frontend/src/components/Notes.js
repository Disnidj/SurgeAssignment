/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';


export default class Note extends Component {
  constructor(props){
    super(props);

    this.state={
      Notes:[]
    };
  }


  //retrieve data
componentDidMount(){
  this.retrieveNotes();
}


  retrieveNotes(){
    axios.get("http://localhost:8000/allNotes").then(res=>{
      if(res.data.success){
        this.setState({
          Notes:res.data.existingNotes
        });
      console.log(this.state.Notes);

      }
    });
  }
  
  
  //delete function

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/note/delete/${id}`).then((res)=>{

    

    this.retrieveNotes();
  })
  alert("Deleted succesfully");
} 


//search data according to title

filterData(Notes,searchKey){
  const result =Notes.filter((note)=>
  note.Title.toLowerCase().includes(searchKey) ||
  note.Title.includes(searchKey)


  )

this.setState({Notes:result})

}



handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8000/allNotes").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingNotes,searchKey)
  }
});

}



  render() {
    return (
      <div>
      <div>
        
        <div className="row" >
        
          <div className="col-lg-9 mt-2 mb-2">

          <div style={{height:'150px', width:'1500px', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
            <br/>
            <br/>
            <h1 style={{color:'blue', textAlign:'center',fontSize:"50px",width:'100%'}}>YOUR NOTES</h1>
            <br/>
        
                         <button className="btn btn-success" style={{marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3',marginTop:'-200px'}}>
                         <a href="/StudentHome" 
                         style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                         <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>


           <br></br> <p style={{fontSize:'20px',marginLeft:'900px'}}>* refresh the page to see your updates and newly created notes</p>
           </div>    

           <button className="btn btn-success" style={{marginLeft:'100px', marginRight:'100px',padding:'17px 60px',marginTop:'90px',
           backgroundColor:'#0fbed8'}}><a href="/addNote" style={{textDecoration:'none',color:'white',fontSize:'20px'}}> 
           <i class="far fa-plus-square"></i>&nbsp;Create New Note</a></button>
           <br></br><br></br>

          <p style={{marginLeft:'100px'}} >  *Click on your name to check your ticket details</p>
          
            
          </div>
            
          <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px' }}>
              
            <input
            className="form-control" style={{marginTop:'250px',padding:'17px 50px', marginRight:'100px'}}
            type="search"
            placeholder="Enter note tilte"
            name="searchQuery"
            onChange={this.handleSearchArea}>
              </input>
          
              <br></br>
              <p> *you can search your notes here</p>
              
          </div>
    
        </div>


              
    <div style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
        
        <table className="table table-hover" style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
              <thead>
            <tr style={{fontSize:'25px'  }}>
            <th scope="col">No:</th>
                <th scope="col">Title of The Note</th>
               
                </tr>
              </thead>
              <tbody>
                  {this.state.Notes.map((Notes,index)=>(
                  <tr key={index}>
                  <th scope="row" style={{fontSize:'20px'  }}>{index+1}</th>

                   <td style={{fontSize:'20px'}}>
                    <a href={`ViewANote/${Notes._id}`} style={{textDecoration:'none' }}>
                        {Notes.Title}
                    </a>
                    
                    </td>
               
               

                    <td>
                        <a className ="btn btn-warning" href={`/UpdateNotes/${Notes._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(Notes._id)}>
                        <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                        </a>  &nbsp;
                  
                    </td>


              </tr>
            ))}

            </tbody>
          </table>
       </div>

    </div>
      
</div>
    
      
    )
  }
}


