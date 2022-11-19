import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import {useState} from "react"


export default function Contact({formdata}){

const [displayEmail,setDisplayEmail]=useState(false)



function handleShowEmail(){
    setDisplayEmail(prev=>!prev)
}




    return (
        <div className="mycontact">
            <small><a href={formdata.website} target="_blank">my website</a></small>
            <div className="my_buttons"> 
            <div className="my_buttons_email">
            <button className="email_button" onClick={handleShowEmail} >
                <MdEmail size="18px" />
                <label>Email</label>
            </button>
            { displayEmail && <p >{formdata.email}</p>}
            </div> 
            <div className="my_buttons_in" >
            <a href={formdata.linkedin} target="_blank"><button className="in_button" >
                <IoLogoLinkedin size="18px" className="in_button_icon" />
                <label>LinkedIn</label>
            </button></a>
            </div> 
            
            
            </div>
        </div>
    )
}