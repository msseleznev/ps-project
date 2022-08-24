import React from 'react';
import s from "./Footer.module.scss";
import style from "../../assets/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <div className={s.contacts}>
                    <div className={s.phone}>8 (800) 111 -11-11</div>
                    <div className={s.info}>Звонок бесплатный</div>
                </div>
                <div className={s.preview}>
                    Услуга предоставляется КПК «Областной сберегательный союз» {'\n'}
                    ОГРН 11111111111, ИНН 111111111111 {'\n'}
                    191023, г. Санкт-Петербург, ул. Гороховая, 28
                </div>

            </div>
        </div>
    );
};

export default Footer;
