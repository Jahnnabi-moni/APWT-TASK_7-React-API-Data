import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';


 


const AllEmployee=()=>{
    const [posts,setPosts]=useState([]);

    useState(()=>{
       
        // https://jsonplaceholder.typicode.com/todos/
        axios.get("http://127.0.0.1:8000/api/dashboard").then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);

        }).catch(err=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <p><b>All Employee Information  </b> </p> 
                {
                    
                  
                   
 
                    posts.map(post=>(
                        <Post 
                        Name={post.Name} Email={post.Email} Phone={post.Phone} Address={post.Address}
                        
                        
                        ></Post>
                    ))
                }
                
        </div>
    )

}
export default AllEmployee;