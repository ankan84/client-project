import React, { useState } from 'react'
import "./UserLogin.css"
import pic from './login_img.png'
import google_pic from './gg-pic3.png'
import fb_pic from './ff_pic.png'
import axios from 'axios'
// import url from '.../admin'

import { useNavigate } from 'react-router-dom'

const Multipleinputs = () => {
    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });



    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserLogin({ ...userLogin, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();


        const url ="http://www.pavantaxconsultants.com:5000"

        axios.post(url+'/registration/admin/signin', { email: userLogin.email, password: userLogin.password }).then((res) => {
            if (res.status === 200) {
                navigate('/dashboard')
            } else {
                alert('somthings wrong ')
            }
        }).catch((e) => {
            alert('somthings wrong ')
        })


    }






    return (
        <div className='login'>
            <div className='content'>
                <div className='left'>
                    <img src={pic} />
                </div>

                <div className='form'>
                    <h1>Admin login</h1>

                    <form action='' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email'></label>
                            <input type='text' autoComplete='off'
                                placeholder='&#xF199; Email'
                                value={userLogin.email}
                                onChange={handleInput}
                                name='email' id='email' />


                        </div>

                        <div>
                            <label htmlFor='password'></label>
                            <input type='password' autoComplete='off'
                                placeholder="&#xf023; password"
                                value={userLogin.password}
                                onChange={handleInput}
                                name='password' id='password' />
                        </div>
                        <button className='btn' type='submit'><b>Login</b></button>
                    </form>


                
                </div>
            </div>
        </div >

    )
}

export default Multipleinputs



































