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
        let array=[];
        console.log("All Users",data?.data);
         data?.data.map((users)=>{
            if(users?.userRole == "user")
            {
                cusdata.push(users);
            }
        });
        setusers(cusdata);
    }
  let array=[];
    let newData = array.map((users) => {
        return {
          
          Email: users?._id,
        };
      });


	useEffect(() => { 
        GetRooms();
   },[])


   

   const deleteRowData = async (id) => {
    let data = await DeleteUser(id);
    console.log("return", data);
    if (data?.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Successful!",
        text: "Delete successfull...!",
      });

      GetRooms();
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed!",
      });


      
    }
  };
  
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
                <h1 style={{color:'blue', textAlign:'center',fontSize:"70px"}}>Registered Customers Details</h1>
                <br/>

                    
                    <button className="btn btn-success" style={{width:'200px',backgroundColor:'#3895d3' , marginRight:'1300px'}}><a href="/AdminHome" 
                    style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>

                    <br/><br/><br/>

                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">ID</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Password</th>
                            <th scope="col">Account type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete user</th>
                          
                            </tr>
                          </thead>  
                          <tbody>
                            {users.map((users,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td scope="row">{users?.firstName}</td>
                                    <td scope="row">{users?.lastName}</td>
                                    <td scope="row">{users?.ID}</td>
                                    <td scope="row">{users?.Email}</td>
                                    <td scope="row">{users?.dateOfBirth}</td>
                                    <td scope="row">{users?.PhoneNumber}</td>
                                    <td scope="row">{users?.Password}</td>
                                    <td scope="row">{users?.accountType}</td>
                                    <td scope="row">{users?.status}</td>


                                    <td>  <button className="btn btn-primary" style = {{textDecoration:'none',color:'white'}}
                                    onClick={() => deleteRowData(users?.Email)}  >
                                    &nbsp;Delete
                                    </button></td>

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