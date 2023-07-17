import React from 'react'
import '../css/Contact.css'

export default function Contact( {contact}) {
  return (
    <div key={contact.id} className='contactWrapper'>
        <div className='mainName'>{contact.first_name}</div>
        <div>Last name: {contact.last_name}</div> 
        <div>Email:{contact.email}</div> 
        <div>Phone: {contact.phone}</div>
        <div>User name: {contact.user_name}</div>
    </div>
  )
}
