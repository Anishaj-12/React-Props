import React from 'react'
import  PropTypes  from 'prop-types'
const ProfileCompo = (props) => {
    return (
        <div>
         <h3  style={{ color: "white",  padding: "70px" }} > {props.title}</h3>   
          <p style={{ color: "white" ,marginTop: "50px" }}> <h2 style={{marginLeft: "-499px"}}>History</h2> {props.Bio}</p> 
         
           <p style={{color: "white",marginTop: "50px"}}> <h2 style={{marginLeft: "-480px"}}>Profession</h2>   {props.Profession}</p>
           <p style={{marginTop: "50px"}} > {props.children}</p>
           </div>
        
    )
    
    
}

ProfileCompo.defaultProps = {
    title: "Undefined",
    Bio: "Undefined",
    Profession: "Undefined"   
}
ProfileCompo.propTypes = {
    title: PropTypes.string,
    Bio:  PropTypes.string,
    Profession: PropTypes.string,
    children: PropTypes.string
}

export default ProfileCompo;
