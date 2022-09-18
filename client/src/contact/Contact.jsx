import React from 'react'
import './contact.css';
import contact_img from './contact.png';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='head'>
        <h1>Contact Us</h1>
      </div>
      <div className='content'>
        <img src={contact_img} ></img>
        <div className='right'>
            
<p>If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone, fax or email and we will be sure to get back to you accordingly.</p>
<p>Prof:Paavana Krishna</p>
<p>Off:0866-2541668</p>
<p>Res:0866-2552522</p>
<p>Mob:8985313058</p>
<p>Address-#54-7-25,Shop No. 57,Janaki Ramalah Complex,1st Floor,3rd Cross,3rd Road,Jawahar Autonagar,Vijayawada-520007 </p>

        </div>
      </div>
    </div>
  )
}

export default Contact