import React from "react";
import '../css/style.css';
import Logo from '../pictures/Logo.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={Logo}  alt=""  />
                <h1>Portland Historical Tours</h1>
            </header>
        );
    }
}

export default Header;