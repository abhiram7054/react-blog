import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">
                    React & Node
                </span>
                <span className="headerTitleLg">
                    Blog
                </span>
            </div>
            <img className="headerImg" alt="" src="https://thumbs.dreamstime.com/b/header-laptop-scattered-stationery-yellow-background-online-school-distance-education-concept-211955492.jpg" />
        </div>
    )
}
