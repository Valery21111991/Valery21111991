import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import { useState } from "react";



const Navbar = ()=> {
 
    return (
         <nav className="navbar">
            <ul className="navbar__items">
                <li className="navbar__item navbar__item_property">Имущество</li>
                <li className="navbar__item navbar__item_inventory ">Инвентаризация</li>
                <li className="navbar__item navbar__item_employees">Сотрудники</li>
                <li className="navbar__item navbar__item_notice">Уведомления</li>
                <li className="navbar__item navbar__item_location">
                <NavLink to='/location' >Локации</NavLink> 
                </li>
                <li className="navbar__item navbar__item_settings">
                   <NavLink to='/settings'>Настройки</NavLink> 
                </li>
                <li className="navbar__item navbar__item_hide">Скрыть меню</li>              
            </ul>
        </nav>
    )
}

export default Navbar;