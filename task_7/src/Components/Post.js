import React from "react";
const Post=(props)=>{
    
    return( 
        <div>
            
            <p>
            Name: {props.Name}<br/>
            Email: {props.Email}<br/>
            Phone: {props.Phone}<br/>
            Address: {props.Address}
            

            
            </p>
            
        </div>
 
    )
    
}
export default Post;