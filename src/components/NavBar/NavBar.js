import React, { Component } from 'react';
import { menuItems } from "./NavBarItems";
import { Button } from "../Button/Button";
import "../../styles/NavBar.css";


class NavBar extends Component {
    state = {
        clicked: false
    }


    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo">
                    <i class="fas fa-car-side"></i>
                    South Pass Student Dashboard
                    <i class="fas fa-car-side"></i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul className="nav-menu">
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
                <Button> Sign In</Button>
            </nav>
        )
    }
}

export default NavBar;