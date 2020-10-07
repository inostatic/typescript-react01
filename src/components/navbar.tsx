import React from "react"
import {NavLink} from "react-router-dom";

export const Navbar:React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-4 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Task list</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}