import React from 'react';
import { useLocation } from "react-router-dom";
import { menuItems } from "./NavBarItems";
import "../../styles/NavBar.css";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function NavBar() {
    const location = useLocation();


    if (location.pathname.match("/login")) {
        return null;
    }

    return (
        <nav className="NavBarItems">
            <h1 className="navbar-logo">
                <i class="fas fa-car-side"></i>
                South Pass Student Dashboard
                <i class="fas fa-car-side"></i>
            </h1>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
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
        </nav>
        // <nav className="NavBarItems">
        //     <h1 className="navbar-logo">
        //         <i class="fas fa-car-side"></i>
        //         South Pass Student Dashboard
        //         <i class="fas fa-car-side"></i>
        //     </h1>
        //     <ul className="nav-menu">
        //         {menuItems.map((item, index) => {
        //             return (
        //                 <li key={index}>
        //                     <a className={item.className} href={item.url}>
        //                         {item.title}
        //                     </a>
        //                 </li>
        //             );
        //         })}
        //     </ul>
        // </nav>
    );
}

// class NavBar extends Component {
//     state = {
//         clicked: false
//     }



//     render() {
//         console.log(useHistory());


//         return (
//             <nav className="NavBarItems">
//                 <h1 className="navbar-logo">
//                     <i class="fas fa-car-side"></i>
//                     South Pass Student Dashboard
//                     <i class="fas fa-car-side"></i>
//                 </h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                 </div>
//                 <ul className="nav-menu">
//                     {menuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <a className={item.className} href={item.url}>
//                                     {item.title}
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </nav>
//         )
//     }
// }

// export default NavBar;