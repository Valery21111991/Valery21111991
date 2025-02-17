import React from "react";
import './Header.css';
import logo from '../../images/tie_logo.png';
import exit from '../../images/exit.png';

const Header = ()=>{
    return (
        <header className="header">
            <div className="header__logo">
                <a href="#">
                    <img src = {logo} alt="logo"/>
                </a>
            </div>
            <div className="header__exit">
            <a href="#">
                    <img src = {exit} alt="logo"/>
                </a>
            </div>
        </header>
    )
}

export default Header;