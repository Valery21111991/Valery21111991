import React from "react";
import './popup.css';
import { Transition } from "react-transition-group";


const PopupChangLocation = ({isOpenChange, onCloseChange, children})=>{
    const onWrapperClickChange = (event) =>{
        if (event.target.classList.contains("modal-wrapper")) onCloseChange();
    }


    return (  
        <>
            <Transition in={isOpenChange} timeout={350} unmountOnExit ={true}>
                {(state)=>(<div className={`modal modal--${state}`}>
                    <div className="modal-wrapper" onClick={onWrapperClickChange}>
                        <div className="modal-content modal-content__change">
                            <h3 className="modal__heading">Изменить локацию %название%</h3> 
                            <form className="modal__form">
                                <div className="modal__container">
                                    <label>
                                        Название
                                        <br/>
                                        <input className='modal__input modal__input_change' type='text'></input>
                                    </label>
                                </div>
                                <div className="modal__container">
                                    <label>
                                        Штрихкод
                                        <br/>
                                        <input className='modal__input modal__input_change' type='text'></input>
                                    </label>
                                </div>
                                <div className="modal__container">
                                    <label>
                                        RFID
                                        <br/>
                                        <input className='modal__input modal__input_change' type='text'></input>
                                    </label>
                                </div>
                                <div className="modal__container">
                                    <label>
                                        Вложенность
                                        <br/>
                                        <select className="inside modal__input modal__input_change">
                                            <option value="1" checked='checked'>Локация 1</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="modal__slider">
                                    <span>Виртуальная локация</span>
                                    <input type='range' className="modal__range" min="0" max="1"></input>
                                </div>
                                <div className="modal__slider">
                                    <span>Локация для утерь</span>
                                    <input type='range' className="modal__range" min="0" max="1"></input>
                                </div>
                                <div className="modal__buttons modal__buttons_change">
                                    <button className="modal__button_change modal__button_delete">Удалить</button>
                                    <button className="modal__button_change" onClick={()=> onCloseChange()}>Отменить</button>
                                    <button className="modal__button modal__button_width modal__button_change modal__button_background">Сохранить</button>
                                </div>
                            </form>                       
                        </div>
                    </div>
                </div>)}
            </Transition>
        </>        

    ) 
}

export default PopupChangLocation;