import React from 'react'
import './Header.scss'
import { NavLink, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logochat from '../../assets/image/logochat.png'

const Header = () => {
 
    let navigate = useNavigate()

  return (
    <div className='container'>
            <div className='left'>
                <img className='img-logo' src={logochat} onClick={() => {
                    navigate("/")
                }}/>
            </div>

            <div className='right'>
                <NavLink className='home' to="/" exact>
                    Home
                </NavLink>

                <NavLink className='room' to="/room" exact>
                    Room
                </NavLink>

                <NavLink className='about' to="/about" exact>
                    About
                </NavLink>
            </div>
    </div>
  )
}

export default Header