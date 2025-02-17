import React, {useState} from "react";
import {PopupAddLocation} from '../../../popup/popupAddLocation';
import PopupChangLocation from "../../../popup/popupChangLocation";
import '../../Section/Section.css';


const Location = () =>{
    const [modalIsOpen, setModalOpen] = useState(false);
    const [modalIsOpenChange, setModalOpenChange]=useState(false);
return (
        <div className="location">
            <h1 className="section__title">
                 Локации / Все локации
            </h1> 
            <div className="location__buttons">
               <div className="location__settings">
                <button className="location__button location__button_all">Все локации</button>
                <button className="location__button location__button_imEx">Импорт/Экспорт</button>
                <button className="location__button location__button_settings">Настройки</button>
               </div>
                <div className="location__synchro">
                    <button className="location__button location__button_width ">
                        <span className="location__title">синхронизация</span>
                        <span className="location__data">(17.05.2024</span> 
                        <span className="location__data"> 15:23:21)</span>                        
                    </button>
                </div>
            </div>
            <div className="location__add">
                <div>
                    <button className="modal-show-button"
                    onClick={()=> setModalOpen(true)}
                    >Создать локацию</button>  
                </div>
                <div className="location__info">
                    <div className="location__checkbox">
                    <input className="location__arrow" id="search" type="checkbox" checked='checked'/>
                    <label for="search">Поиск по точному вхождению</label>
                    </div> 
                    <div className="location__searchWrapper">
                    <form action="" method="get" className="location__form">
                        <button className="location__loupe" type="submit"></button>                        
                        <input className="location__search"  type="text" placeholder="Поиск"/>
                    </form> 
                    </div>   
                </div>
  
             </div>            
            <PopupAddLocation
            isOpen={modalIsOpen}
            onClose ={()=> setModalOpen(false)}
            >
                <button>Создать локацию</button>
            </PopupAddLocation>
            <div className="location__list">
                            <ul>
                                <li>
                                    <div className="location__items">
                                        <div className="location__item">
                                            <button className="location__button_item location__buttons"></button>
                                            <button className='location__button_point location__buttons'></button>
                                            <p className="location__heading">Локация 1</p>
                                            <p className="location__number">512</p>
                                            <button className="modal-show-button location__modal location__buttons" onClick={()=> setModalOpenChange(true)}>Редактировать</button>
                                            <button className="location__delete location__buttons">Удалить</button>                                             
                                        </div>
                                    </div>
                                    <ul className="location__sections">
                                        <li>
                                            <div className="location__items">
                                                <div className="location__item">
                                                    <button className="location__button_item location__buttons"></button>
                                                    <button className='location__button_point location__buttons'></button>
                                                    <p className="location__heading">Подотдел 1</p>
                                                    <p className="location__number">10</p>
                                                    <p className="location__comment">Для утерь</p>
                                                    <p className="location__barcode"></p>                                                   
                                                </div>

                                            </div>
                                            <div className="location__items">
                                                <div className="location__item">
                                                    <button className="location__button_item location__buttons"></button>
                                                    <button className='location__button_point location__buttons'></button>
                                                    <p className="location__heading">Подотдел 2</p>
                                                    <p className="location__number">100</p>
                                                    <p className="location__comment"></p>
                                                    <p className="location__barcode"></p>                                                   
                                                </div>
                                                <ul className="location_underSectios">
                                                    <li className="location__item">
                                                        <button className='location__button_point location__buttons'></button>
                                                        <p className="location__heading">Подподотдел 1</p>
                                                        <p className="location__number">2</p>
                                                        <p className="location__comment">Виртуальная</p>
                                                        <p className="location__barcode">Без штрихкода</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="location__items">
                                                <div className="location__item">
                                                    <button className="location__button_item location__buttons"></button>
                                                    <button className='location__button_point location__buttons'></button>
                                                    <p className="location__heading">Подотдел 3</p>
                                                    <p className="location__number">400</p>
                                                    <p className="location__comment"></p>
                                                    <p className="location__barcode"></p >                 
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="location__items">
                                        <div className="location__item">
                                            <button className="location__button_item location__buttons"></button>
                                            <button className='location__button_point location__buttons'></button>
                                            <p className="location__heading">Локация 2</p>
                                            <p className="location__number">100</p>                                              
                                        </div>
                                    </div>
                                   <div className="location__items">
                                        <div className="location__item">
                                            <button className="location__button_item location__buttons"></button>
                                            <button className='location__button_point location__buttons'></button>
                                            <p className="location__heading">Локация 3</p>
                                            <p className="location__number">100</p>                                           
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
            </div>                 
            <PopupChangLocation
            isOpenChange={modalIsOpenChange}
            onCloseChange ={()=> setModalOpenChange(false)}             
            >
            </PopupChangLocation>
        </div>      
    )
}
    
    
    

export default Location;