import React from 'react';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { orange} from '@mui/material/colors';
import foodielogo from '../../Assets/foodielogo.PNG';
import { NavLink } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
function Navbar(){
    const navigate = useNavigate();
    return(
        <div className='Navbar-container'>
            <div>
                <img src={foodielogo} className='navbar-foodie-logo-img' alt="foodie-logo" onClick={()=>navigate('/')}/>
            </div>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contactus'><li>ContactUs</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                
                <NavLink to='/addcart'><li>AddToCart</li></NavLink>

            </ul>
            <AccountCircleIcon fontSize="large" sx={{color: orange[500]}} className='profile-appear' onClick={()=>navigate('/login')}/>
      
        </div>
    );
}

export default Navbar;