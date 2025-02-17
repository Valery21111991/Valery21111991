import React from "react";
import ReactDOM from 'react-dom';
import './Footer.css';
import { useState } from "react";

 

const Footer2 =()=> {
     return (
        <footer className="footer">
            <div className='footer__buttons footer__block footer__block_invisible '>
                <button className="footer__button footer__button_save">Сохранить</button>
                <button className="footer__button">Отменить</button>
            </div>
            <div className="updates footer__block">
                <p className="updates__text">Последний приём 20.09.2021 18:36:21</p>
                <p className="updates__text">Последняя передача 20.09.2021 18:38:21</p>
            </div>
            <div className="footer__doc footer__block"> 
                <a className="footer__link">Документация</a>
            </div>  
        </footer>
    )
}

export default Footer2;