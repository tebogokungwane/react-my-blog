import '../Css/ContactStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { TextField } from "@material-ui/core"

import React, { useState } from 'react'
import ContactService from '../service/ContactService';
//import {  useNavigate } from 'react-router-dom';

const Contact=()=>{

    //Variable and method to collect and store inptes
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [contactMessage, setContactMessage] = useState('');
//const navigate = useNavigate();


    const contactData = {contactName, contactEmail, contactNumber, contactMessage}

    //send data to api and navigate when successfully
    function saveContact(e){
        if(contactData.contactName !== "" && contactData.contactEmail !== "" && contactData.contactNumber !== "" && contactData.contactMessage !== ""){
            console.log(contactData);

            e.preventDefault();
            
            ContactService.saveContact(contactData)
            alert("Success, information send successfully ")

            .catch(e=> console.log(e));
        }else{
            alert("Please, fill in all inputs")

        }
    }


    return(
        <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Contact Us</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    type="text" placeholder='Enter First Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    type="email" placeholder='Enter email' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    type="text" placeholder='Enter cell number' />
                            </div>
                            <div className='form-group mb-2'>
                                <textarea className='form-control'
                                    value={contactMessage}
                                    onChange={(e) => setContactMessage(e.target.value)}
                                    type="text" placeholder='comment' rows={5} />
                            </div>
                            <button onClick={(e) => saveContact(e) } className='btn'>Save</button> {" "}
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Contact