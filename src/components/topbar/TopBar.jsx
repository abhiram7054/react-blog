import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"


export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-f"></i>            
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-google"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link style={{textDecoration:"none", color:"inherit"}} to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link style={{textDecoration:"none", color:"inherit"}} to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link style={{textDecoration:"none", color:"inherit"}} to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link style={{textDecoration:"none", color:"inherit"}} to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                
                <img className="topImage"
                src="http://www.shrividya.co.in/assets/img/team/profile.jpg"
                alt=""
                />
                ) : (
                    <ul className='topList'>
                    <li className='topListItem'>
                    <Link style={{textDecoration:"none", color:"inherit"}} to="/login">LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                    <Link style={{textDecoration:"none", color:"inherit"}} to="/register">REGISTER</Link>
                    </li>
                    </ul>
                    
                )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
