import React from "react";
import axios from "axios";
import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";
import { GetallUsers, DeleteUser } from "../services/AuthServices";


const Viewallusers = () => {

    const navigate = useNavigate();

    const handleSubmit= ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      navigate("/Login");
    }

	const [users , setusers] = useState([])
  
	const GetRooms = async () =>{
        let data = await GetallUsers();
        let cusdata =[];
        console.log("All Users",data?.data);
         data?.data.map((users)=>{
            if(users?.userRole == "user")
            {
                cusdata.push(users);
            }
        });
        setusers(cusdata);
    }
  

	useEffect(() => { 
        GetRooms();
   },[])
  
 /* const searchItems = (ID) => {
        setSearchInput(ID)
        if (searchInput !== 'ID') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    } 


   <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)} />

*/
   
   

	return (
		<div style={{ textAlign: "center" }}>
             <div style={{marginTop:"30px"}}>
          
              
            </div>
            <br/>
            
			
			<div>
               
            <div style={{height:'100px', width:'100%', backgroundColor:"#ADD8E6", marginTop:'0px',height:"100px"}}>
                <br/>
                <br/>
                <h1 style={{color:'blue', textAlign:'center',fontSize:"70px"}}>Registered Customers Details (To Send Mails)</h1>
                <br/>

                    
                    <button className="btn btn-success" style={{width:'200px',backgroundColor:'#3895d3' , marginRight:'1300px'}}><a href="/AdminHome" 
                    style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>

                    <br/><br/><br/>
                <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>#</th>
                           
                            <th>Email Address</th>
                            
                            <th>Password</th>
                            
                          
                            </tr>
                        </thead>  
                        <tbody>
                            {users.map((users,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    
                                    <td>{users?.Email}</td>
                                    
                                    <td>{users?.Password}</td>
                                    


                                    <td>  <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}  href="/https://mail.google.com/mail/u/0/#inbox/16426a350b26c600"  >
                                    &nbsp;Send Email
                                </a></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
			</div>
		</div>
	);
};


export default Viewallusers;