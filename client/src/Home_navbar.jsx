import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './home_navbar.css';
import logo from './images/logo.png';
import axios from 'axios'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
const Home_navbar = () => {
  const navigate = useNavigate();
  const [active,setActive]=useState(false);
  const [auth_profile, setAuthProfile] = useState()
  const [profile,setProfile]=useState()
  useEffect(() => {
    axios.get('/registration/g_auth/check_user').then((res) => {
      setAuthProfile(res.data)
    }).catch((e) => {

    })
    axios.get('/registration/check_user').then((res) => {
      if(res.status===200)
      setProfile(res.data)
    }).catch((e) => {

    })

  }, [])
  const bar = useRef(null);
  window.onscroll = () => {
    if (window.scrollY > 65) {
      bar.current.classList.add("active2");
    }
    else {
      bar.current.classList.remove("active2");
    }
  }

  const login = () => {
    navigate("/login");
  }
  const Sign = () => {
    navigate("/createAccount");
  }
  return (
    <>
      <div className= {active?"navigation-manu navigation-manu-block":"navigation-manu navigation-manu-none"} >
    <div className="navigation-menu-upper">
    <CloseOutlinedIcon onClick={()=>{
      setActive(false)
    }} sx={{fontSize:"30px"}}></CloseOutlinedIcon>
    </div>
    <div className="navigation-manu-lower">
    <ul>
          <a href='#' style={{textDecoration:"none"}}><li style={{color:"white"}}>Home</li></a>
          {/* /---------------------------------------------------------------compilance-----------------------------------------------------/ */}

          <li><Link to={'/compilance'}><span style={{color:"white"}}>Compilance</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <a href='#acc'><li>Accounting Services</li></a>
                <a href="#dig"><li>Digital Signature</li></a>
                <a href="#imp"><li>Import Export Code</li></a>
                <a href="#com"><li>Company PAN Card</li></a>
                <a href="#com_tan"><li>Company TAN Number</li></a>
                <a href='#bar'><li>Bar Code</li></a>
                <a href="#iso"><li>ISO 9001</li></a>
                <a href="#shop"><li>Shop Act</li></a>
                <a href="#fss"><li>Fssai</li></a>
                <a href='#itr'><li>ITR Filing</li></a>
              </ul>
            </div>
          </li>
          {/* /-----------------------------------------------------------------trademark--------------------------------------/ */}
          <li><Link to={'/trademark'}><span style={{color:"white"}}>Trademark</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <a href="#tra_reg"><li>Trademark Registration</li></a>
                <a href="#tra_renewal"><li>Trademark Objection/Hearing/Renewal</li></a>
                <a href="#tra_lic"><li>Trade License</li></a>

              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------GST---------------------------------------------/ */}
          <li><Link to={'/gst'}><span style={{color:"white"}}>GST</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <Link to='/gst_registration'>
              <li>GST Registration</li>
              </Link>
              <Link to='/gst_filling'>
              <li>GST Filing</li>
              </Link>


              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------registration----------------------------------------------/ */}
          <li><Link to={'/registration'}><span style={{color:"white"}}>Registration</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <a href="#msme"><li>MSME(Udyam) Registration</li></a>
                <a href="#prop"><li>Proprietorship Registration</li></a>
                <a href="#par_reg"><li>Partnership Registration</li></a>
                <a href="#pvt"><li>Pvt ltd/LLP/OPC Registration</li></a>
                <a href="#prp_tax"><li>Professional Tax registration</li></a>



              </ul>
            </div>
          </li>
          {/* /-----------------------------------------------------------services-------------------------------------------------/ */}
          <li><Link to={'/services'}><span style={{color:"white"}}>Services</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <a href="#ux"><li>UX Design</li></a>
           <a href="#web"><li>Web Development</li></a>
            <a href="#bro"><li>Brochure Designing</li></a>
            <a href="#visit"><li>Business Card</li></a>
            <a href="#busi"><li>Business Reports</li></a>

              </ul>
            </div>
          </li>
         {/* -------------------------------------------------------------contact---------------------------------------------------- */}
         <li><Link to={'/contact'}><span style={{color:"white"}}>Contact</span></Link></li>
          
          
          
          <li><Link to={'/admin/login'}><span style={{color:"white"}}>Dashboard</span> </Link></li>
        </ul>

        {
          auth_profile|| profile ? (<>
          <div className="navbar-profile"><AccountBoxIcon></AccountBoxIcon><p>{(auth_profile || profile).substring(0,10)}..</p> <LogoutIcon onClick={()=>{
           
            axios.post('registration/logout').then((res)=>{
           
               if(res.status===200) {
                window.location.reload();
               } 
            })
            window.location.reload();
            
            
          }}></LogoutIcon></div>
            
          </>) : (<><button className='btn2' >Sign Up</button>
            <button className='btn3' >Log In</button>
            
          </>)
        }
        </div>


    </div>
    

    <div className='home_navbar'>
    
      <div className='top'>
      <div className="navigation-manu-icon" onClick={()=>{
        setActive(true);
      }}>
      <MenuIcon sx={{
        color:"#fff",
        fontSize:"20px"
      }}></MenuIcon>
      </div>
   
        {/* <div className='location'>
          <i class="fa-solid fa-location-pin" id="icon"></i>
          <h6>1010 Avenue,New York,USA-2029</h6>
        </div>
        <div className='phone'>
          <i class="fa-solid fa-phone" id="icon"></i>
          <h6>456123078</h6>
        </div>
        <div className='clock'>
          <i class="fa-solid fa-clock" id="icon"></i>
          <h6>Mon-Sat,8.00-18.00.Sunday Closed</h6>
        </div> */}

      </div>
      <div className='navbar1' ref={bar}>
        <img src={logo} className="logo"></img>
        <ul>
          <a href="#"><li style={{color:"#0D6EFD"}}>Home</li></a>
          {/* /---------------------------------------------------------------compilance-----------------------------------------------------/ */}

          <li><Link to={'/compilance'}><span>Compilance</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <a href='#acc'><li>Accounting Services</li></a>
                <a href="#dig"><li>Digital Signature</li></a>
                <a href="#imp"><li>Import Export Code</li></a>
                <a href="#com"><li>Company PAN Card</li></a>
                <a href="#com_tan"><li>Company TAN Number</li></a>
                <a href='#bar'><li>Bar Code</li></a>
                <a href="#iso"><li>ISO 9001</li></a>
                <a href="#shop"><li>Shop Act</li></a>
                <a href="#fss"><li>Fssai</li></a>
                <a href='#itr'><li>ITR Filing</li></a>
              </ul>
            </div>
          </li>
          {/* /-----------------------------------------------------------------trademark--------------------------------------/ */}
          <li><Link to={'/trademark'}><span >Trademark</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <a href="#tra_reg"><li>Trademark Registration</li></a>
                <a href="#tra_renewal"><li>Trademark Objection/Hearing/Renewal</li></a>
                <a href="#tra_lic"><li>Trade License</li></a>

              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------GST---------------------------------------------/ */}
          <li><Link to={'/gst'}><span >Gst</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <Link to='/gst_registration'>
              <li>GST Registration</li>
              </Link>
              <Link to='/gst_filling'>
              <li>GST Filing</li>
              </Link>
                


              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------registration----------------------------------------------/ */}
          <li><Link to={'/registration'}><span >Registration</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

<div className='submenu'>
  <ul>
    <a href="#msme"><li>MSME(Udyam) Registration</li></a>
    <a href="#prop"><li>Proprietorship Registration</li></a>
    <a href="#par_reg"><li>Partnership Registration</li></a>
    <a href="#pvt"><li>Pvt ltd/LLP/OPC Registration</li></a>
    <a href="#prp_tax"><li>Professional Tax registration</li></a>



              </ul>
            </div>
          </li>
          {/* /-----------------------------------------------------------services-------------------------------------------------/ */}
          <li><Link to={'/services'}><span>Other Services</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <a href="#ux"><li>UX Design</li></a>
           <a href="#web"><li>Web Development</li></a>
            <a href="#bro"><li>Brochure Designing</li></a>
            <a href="#visit"><li>Business Card</li></a>
            <a href="#busi"><li>Business Reports</li></a>

              </ul>
            </div>
          </li>
          
          {/* /-----------------------------------------------------------Contact-------------------------------------------------/ */}
          <li><Link to={'/contact'}><span>Contact</span> </Link><span></span></li>
          
          
          <li><Link to={'/admin/login'}><span>Dashboard</span> </Link></li>
        </ul>

        {
          auth_profile|| profile ? (<>
          <div className="navbar-profile"><AccountBoxIcon></AccountBoxIcon><p>{(auth_profile || profile).substring(0,10)}..</p> <LogoutIcon onClick={()=>{
           
            axios.post('registration/logout').then((res)=>{
               if(res.status===200)  window.location.reload();
            })
            window.location.reload();
            
            
          }}></LogoutIcon></div>
            
          </>) : (<><button className='btn2' >Sign Up</button>
            <button className='btn3' >Log In</button>
          </>)
        }
      </div>
    </div>
    
    </>
  )
}

export default Home_navbar
