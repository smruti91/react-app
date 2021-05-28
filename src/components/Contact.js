import React from 'react'
import { Link } from 'react-router-dom';

 const Contact = (props) => {
   
     const {id,name,email} = props.contact;
    return (
        <div className="item"  >
               {/* <div className="ui center" 
               style={{ margin:"25px" , color:"brown"}}
               >
                <h2>Contact List</h2>
               </div> */}
                <div className="content">
                    {/* pass routing path and comonett data as props */}
                    <Link to = {{pathname: `/contact/${id}` , state:{contact:props.contact} }} > 
                       <div className="header">{name}</div>
                       <div>{email}</div>
                    </Link>
                   
                </div>
                <i className="trash alternate outline icon " 
                  style={{ color:"red" , marginTop: "-25px",float: "right" }}
                  onClick = {()=> props.clickHandler(id)}
                ></i>
            </div>
    )
}

export default Contact;
