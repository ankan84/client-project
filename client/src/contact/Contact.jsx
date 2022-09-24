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
<p><span>Prof:</span> Paavana Krishna</p>
<p><span>Contact:</span> 8985313058,9290713058</p>
<p><span>Address-</span>
#54-7-25,Shop No. 57,Janaki Ramalah Complex,1st Floor,3rd Cross,3rd Road,Jawahar Autonagar,Vijayawada-520007 </p>
<p>Branch office: Shop NO:62, Kaleswara Rao Market, 1st Floor, Opp:Meeseva 1Town,
Vijayawada-520001</p>

        </div>
      </div>
    </div>
  )
}

export default Contact