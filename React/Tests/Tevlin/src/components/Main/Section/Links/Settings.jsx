import React from "react";
import '../../Section/Section.css';

const Settings = () => {
    return (
        <div className="settings" >
            <h1 className="section__title">
                Настройки / Локации
            </h1>
            <div className="settings__buttons location__buttons">
                <button className="location__button settings__button settings__button_property">Имущество</button>
                <button className="location__button settings__button settings__button_invent">Инвентаризация</button>
                <button className="location__button settings__button settings__button_personal">Сотрудники</button>
                <button className="location__button settings__button settings__button_location">Локации</button>
                <button className="location__button settings__button">Уведомления</button>
                <button className="location__button settings__button"> Справочники</button>
                <button className="location__button settings__button">Пользователь</button>
            </div>
            <div className="settings__tables">
                <table className="settings__table">
                    <caption className="settings__heading">
                        Настройка полей таблицы
                    </caption>
                    <thead>
                        <tr className="settings__title">
                            <th className="settings__cell_font settings__cell_title1"></th>
                            <th className="settings__cell_border settings__cell_font settings__cell_title2">Описание</th>
                            <th className="settings__cell_font settings__cell_title3 ">Сортировка</th>
                            <th className="settings__cell_font settings__cell_title4">ID</th>
                            <th className="settings__cell_font settings__cell_title5">Тип поля</th>
                            <th className="settings__cell_font settings__cell_title6">Выводить в таблицу</th>
                            <th className="settings__cell_font settings__cell_title7">Обязательно</th>
                            <th className="settings__cell_font settings__cell_title8">Удалить</th>
                        </tr>
                    </thead>
                    <tbody className="settings__tableBody">
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p className="settings__text">Название</p>
                                <button className="setting__pencil" ></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button className="settings__question"></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                                <div className="settings__cell_borders">
                                    500
                                </div></td>
                            <td className="settings__cell settings__cell_width">1001</td>
                            <td className="settings__cell settings__cell_left">Строка</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable1" type="checkbox" checked='checked'></input>
                                    <label for='inTable1'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable2" type="checkbox" checked='checked'></input>
                                    <label for='inTable2'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable3" type="checkbox"></input>
                                    <label for='inTable3'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p className="settings__text">Цена</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                                <div className="settings__cell_borders"> 510</div>
                            </td>
                            <td className="settings__cell settings__cell_width">1002</td>
                            <td className="settings__cell settings__cell_left">Число</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable4" type="checkbox" checked='checked'></input>
                                    <label for='inTable4'></label>
                                </div>

                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable5" type="checkbox" checked='checked'></input>
                                    <label for='inTable5'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable6" type="checkbox" checked='checked'></input>
                                    <label for='inTable6'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p className="settings__text">МОЛ</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                                <div className="settings__cell_borders">
                                  520  
                                </div>
                                </td>
                            <td className="settings__cell settings__cell_width">1003</td>
                            <td className="settings__cell settings__cell_picture settings__cell_left">Справочник</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable7" type="checkbox" checked='checked'></input>
                                    <label for='inTable7'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable8" type="checkbox" checked='checked'></input>
                                    <label for='inTable8'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable9" type="checkbox"></input>
                                    <label for='inTable9'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Фото</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                530
                            </div>
                                </td>
                            <td className="settings__cell settings__cell_width">1004</td>
                            <td className="settings__cell settings__cell_left">Файл</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable10" type="checkbox" checked='checked'></input>
                                    <label for='inTable10'></label>
                                </div>

                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable11" type="checkbox" checked='checked'></input>
                                    <label for='inTable11'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable12" type="checkbox"></input>
                                    <label for='inTable12'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Цвет</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                540
                            </div>
                                </td>
                            <td className="settings__cell settings__cell_width">1005</td>
                            <td className="settings__cell settings__cell_left">Строка</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable13" type="checkbox" checked='checked'></input>
                                    <label for='inTable13'></label>
                                </div>

                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable14" type="checkbox" checked='checked'></input>
                                    <label for='inTable14'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable15" type="checkbox"></input>
                                    <label for='inTable15'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Локация</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                 550
                            </div>
                               </td>
                            <td className="settings__cell settings__cell_width">1006</td>
                            <td className="settings__cell settings__cell_picture settings__cell_left">Справочник</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable16" type="checkbox" checked='checked'></input>
                                    <label for='inTable16'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable17" type="checkbox" checked='checked'></input>
                                    <label for='inTable17'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable18" type="checkbox"></input>
                                    <label for='inTable18'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Количество</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                560
                            </div>
                                </td>
                            <td className="settings__cell settings__cell_width">1007</td>
                            <td className="settings__cell settings__cell_left">Число</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable19" type="checkbox" checked='checked'></input>
                                    <label for='inTable19'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable20" type="checkbox" checked='checked'></input>
                                    <label for='inTable20'></label>
                                </div>

                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable21" type="checkbox"></input>
                                    <label for='inTable21'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Описание</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                  570
                            </div>
                              </td>
                            <td className="settings__cell settings__cell_width">1008</td>
                            <td className="settings__cell settings__cell_left">Текст</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable22" type="checkbox" checked='checked'></input>
                                    <label for='inTable22'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable23" type="checkbox" checked='checked'></input>
                                    <label for='inTable23'></label>
                                </div>

                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable24" type="checkbox"></input>
                                    <label for='inTable24'></label>
                                </div>
                            </td>
                        </tr>
                        <tr className="table__line">
                            <td className="settings__cell settings__cell_1">
                                <button className="setting__choise"></button>
                                <p>Количество</p>
                                <button className="setting__pencil"></button>
                            </td>
                            <td className="settings__cell settings__cell_position">
                                <button></button>
                            </td>
                            <td className="settings__cell settings__cell_sort">
                            <div className="settings__cell_borders">
                                580
                            </div>
                                </td>
                            <td className="settings__cell settings__cell_width">1009</td>
                            <td className="settings__cell settings__cell_left">Число</td>
                            <td className="settings__cell">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable25" type="checkbox" checked='checked'></input>
                                    <label for='inTable25'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title7">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable26" type="checkbox" checked='checked'></input>
                                    <label for='inTable26'></label>
                                </div>
                            </td>
                            <td className="settings__cell settings__cell_title8">
                                <div className="settings__block">
                                    <input className="setting__arrow" id="inTable27" type="checkbox"></input>
                                    <label for='inTable27'></label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="settings__add">
                <button class="modal-show-button modal-show-button_width ">Добавить поле</button>
            </div>
        </div>
    )
}

export default Settings;