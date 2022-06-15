import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { menuItems } from "./NavBarItems";
import "../../styles/NavBar.css";
import { Button } from "./Button"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function NavBar() {
    const location = useLocation();

    const [clicked, setClicked] = useState(0);

    if (location.pathname.match("/login")) {
        return null;
    }

    // example of functional state
    // const [student,setStudent] = useState(
    //     {
    //         studentName: "",
    //         studentId: "",
    //         studentAdd: ""

    //     }
    // )

    return (
        <nav className="NavBarItems">
            <h1 className="navbar-logo">
                <i class="fas fa-car-side"></i>
                South Pass Student Dashboard
                <i class="fas fa-car-side"></i>
            </h1>
                <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
            </ul>
            
            <Button>Sign Up</Button>
        </nav>
    );
}