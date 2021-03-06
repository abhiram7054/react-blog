import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"


export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    const PF = "http://localhost:5000/images/"
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
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                <Link to="/settings">
                <img className="topImage"
                src={PF + user.profilePic}
                alt=""
                />
                </Link>
                ) : (
                    <ul className='topList'>
                    <li className='topListItem'>
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>
                    </ul>
                    
                )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
