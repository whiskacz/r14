import React from 'react'

export default function Contact( {Data}) {
  return (
    <div key={Data.id} className='contactWrapper'>
        <div className='mainName'>{Data.user_name}</div>
       <div>Last name:</div> 
       <div>Email:</div> 
       <div>Phone: </div>
       <div>User name: </div>
    </div>
  )
}
