/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios'


export default class AddNote extends Component {

constructor(props){
    super(props);
    this.state={
        Title:"",
        Description:"",
        
    }
}

handleInputChange= (e)=>{
    const {name,value} = e.target;
  
    this.setState({
        ...this.state,
        [name]:value
    })
}

//when customer click sbmit button, data will be stored 
onSubmit = (e) =>{

    e.preventDefault();

    const {Title,Description}= this.state;
    
    const data ={
        Title:Title,
        Description:Description
    }
//check the data is saved and success msg will display
    console.log(data)

    axios.post('http://localhost:8000/note/save',data).then((res)=>{
        if(res.data.success){
            this.setState(
                {
                    Title:"",
                    Description:""

                }
            )
            alert("You are saving the details");
            
            
        }
       
    })

    

}




    render() {
        return (
            <div>
   
                <div className="col-md-8 mt-4 mx-auto">
                <div style={{height:'150px', width:'1100px', backgroundColor:"#ADD8E6", marginTop:'-20px',height:"80px"}}>
                <br/>
                 <br/>
                <h1 style={{color:'blue', textAlign:'center',fontSize:"50px"}}>CREATE A NOTE</h1>
   
         
            </div>

            <br/><br/>
            <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/Notes" 
            style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
            <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>
                
                    <form>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Title:</label>
                            <input type="text"
                            className="form-control"
                            name="Title"
                            placeholder="Enter the title"
                            value={this.state.Title}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Description:</label>
                            <input type="text"
                            style={{height:'90px'}}
                            className="form-control"
                            name="Description"
                            placeholder="Enter the description"
                            value={this.state.Description}
                            onChange={this.handleInputChange} required/>
                    </div>
                        
                        
                    


                    <button className="btn btn-success" type="submit" style={{marginTop:'10px',fontSize:'25px',marginLeft:'420px',marginBottom:'20px'}} onClick={this.onSubmit} >
                            <i className="far fa-check-square"></i>
                            &nbsp; Save

                    </button>

                </form>
                    
            </div>

</div>           
        )
    }
}
