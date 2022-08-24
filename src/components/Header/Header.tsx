import React from 'react';
import s from './Header.module.scss'
import style from '../../assets/Container.module.css'
import {ReactComponent as MainLogo} from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${style.container} ${s.headerContainer}`}>
                <div className={s.preview}>
                    <MainLogo/>
                    <div className={s.items}>
                        <div className={s.firstItem}>Займы под залог недвижимости</div>
                        <div className={s.secondItem}>без смены собственника</div>
                    </div>
                </div>
                <div className={s.contacts}>
                    <div className={s.phone}>8 (800) 111 -11-11</div>
                    <div className={s.info}>Звонок бесплатный</div>
                </div>
            </div>


        </div>
    );
};

export default Header;
