import React from "react";
import {Transition} from 'react-transition-group';
import './popup.css';

export const PopupAddLocation = ({isOpen, onClose, children})=>{
   const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
   };
   
   
    return (
        <>
        <Transition in={isOpen} timeout={350} unmountOnExit ={true}>
        {(state) => (<div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
                <div className="modal-content">
                <h2 className="modal__heading">Создать локацию</h2>
                <form className="modal__form">
                    <input className="name modal__input" type="text" placeholder="Название">
                    </input>
                    <input className="barcode modal__input" type="text" placeholder="Штрихкод">
                    </input>
                    <input className="rfid modal__input" type="text" placeholder="RFID">
                    </input>
                    <select className="inside modal__input">
                        <option>Вложенность</option>
                        <option>Локация1</option>
                        <option>Локация2</option>
                    </select>
                    <div className="modal__slider" >
                        <span>Виртуальная локация</span>
                        <input type='range' className="modal__range" min="0" max="1"></input>
                    </div>
                    <div className="modal__slider">
                        <span>Локация для утерь</span>
                        <input type='range' className="modal__range" min="0" max="1"></input>
                    </div>
                </form>
                <div className="modal__buttons">
                    <buuton className='modal__button'> Создать </buuton>
                    <button className="modal__button modal-close-button"
                    onClick={()=> onClose()}>
                        Отменить
                    </button>                    
                </div>
                </div>
            </div>
        </div> 
        )} 
        </Transition>
        </>
    )
}

export default PopupAddLocation;