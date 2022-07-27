/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateNote extends Component {

constructor(props){
    super(props);
    this.state={
        Title:"",
        Description:""
    }

}

//validations
handleInputChange=(e)=>{

    const{name,value}=e.target;
    let nam = e.target.name;
    let val = e.target.value;

    this.setState({
        ...this.state,
        [name]:value
    })

}



    
//when customer click the update button, date wil be updated to the dtabase
onSubmit = (e) =>{

    
    e.preventDefault();
    const id = this.props.match.params.id;


    const {Title,Description}= this.state;
    
    const data ={
        Title:Title,
        Description:Description
    }

    console.log(data)
//update msg will generate

    axios.put(`/note/update/${id}`,data).then((res)=>{
        if(res.data.success){
            alert("Note Updated successfuly")

            this.setState(
                {
                    Title:"",
                    Description:""

                }
            )
        }
    })

}


//the data will be render to the current page
    componentDidMount(){
        const id = this.props.match.params.id;
 
        axios.get(`http://localhost:8000/note/${id}`).then((res)=>{

            if(res.data.success){
                this.setState({
                    
                    Title:res.data.note.Title,
                    Description:res.data.Description

                });
 
                console.log(this.state.note);
            }
        });
    }

    


    render() {
        return (
            

            <div className="col-md-8 mt-4 mx-auto" >
                
                
                <h1 className= "h3 mb-3 font-weight-normal" style={{color:'White',textShadow: '1px 2px 5px black',fontSize:'50px', marginLeft:'300px'}}>
                <i className="fas fa-edit"></i> Edit Your Ticket</h1>

                <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/homeDisni"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

                <br></br>

                <form className="needs-validation" noValidate>
                       
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Title:</label>
                            <input type="text"
                            className="form-control"
                            name="Title"
                            placeholder="Enter the title"
                           value={this.state.Title}
                            onChange={this.handleInputChange}/>
                       </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Description:</label>
                            <input type="text"
                            className="form-control"
                            name="Description"
                            placeholder="Enter your description"
                            value={this.state.Description}
                            onChange={this.handleInputChange}/>
                        </div>

                       
                        
                    
                        <button className="btn btn-success" type="submit" style={{marginTop:'10px',fontSize:'25px',marginLeft:'420px',marginBottom:'20px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update

                        </button>
                      
                    
                    </form>
                    
                    <button className="btn btn-success" style={{marginLeft:'900px', marginRight:'0px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/StudentHome"
                    style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button><br></br>
            </div> 
        )
    }
}
