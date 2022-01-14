import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://st2.depositphotos.com/3703765/9188/i/600/depositphotos_91883832-stock-photo-young-plant-growing-in-crack.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, iure molestiae asperiores est at excepturi!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-f"></i>            
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-google"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
