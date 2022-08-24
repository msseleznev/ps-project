import React from 'react';
import style from '../../assets/Container.module.css'
import s from './Main.module.scss'
import {ReactComponent as Handshake} from '../../assets/icons/handshake.svg';
import {ReactComponent as Home} from '../../assets/icons/home.svg';
import {ReactComponent as List} from '../../assets/icons/list.svg';
import man from '../../assets/images/cwok_casual_58.png'
import Info from "../Info/Info";

const info = [
    {
        id: 1,
        body: "95% положительных одобрений",
        Logo: Handshake
    },
    {
        id: 2,
        body: "Объект остается в вашей собственности",
        Logo: Home
    },
    {
        id: 3,
        body: "От 300 тысясч до 3 млн. руб. По 2-м документам",
        Logo: List
    },
]
const Main = () => {
    return (
        <div className={s.main}>
            <img src={man} />
            <div className={`${style.container} ${s.mainContainer}`}>
                <div className={s.content}>
                    <div className={s.title}>
                        Законная регистрация сделки с гарантией ставки на весь срок.
                    </div>
                    <div className={s.body}>
                        Деньги под залог недвижимости
                    </div>
                    <div className={s.body}>
                        Одобряем за 1 час
                    </div>
                </div>
                <div className={s.infoList}>
                    {info.map((i) => <Info key={i.id} body={i.body} Logo={i.Logo}/>)}
                </div>

            </div>
        </div>
    );
};

export default Main;
