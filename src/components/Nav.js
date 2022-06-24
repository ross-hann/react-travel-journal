import React from "react"
import earthlogo from "../images/earth.png"

export default function Nav() {
    return (
        <nav>
            <img src = {earthlogo} alt = "logo" className="nav--logo"/>
            &nbsp;<span className="nav--text"> my travel journal.</span> 
        </nav>
    )
}