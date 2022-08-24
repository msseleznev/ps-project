import React, {useState} from 'react';
import style from '../../assets/Container.module.css'
import s from "./Quiz.module.scss";
import QuizItem from "./QuizItem/QuizItem";
import {Input} from "../UI/Input/Input";
import {ReactComponent as Rosreestr} from '../../assets/icons/rosreestr.svg';
import {ReactComponent as SingMe} from '../../assets/icons/singMe.svg';
import {ReactComponent as Sovkom} from '../../assets/icons/sovkom.svg';
import {ReactComponent as Tinkoff} from '../../assets/icons/tinkoff.svg';
import {ReactComponent as Alfa} from '../../assets/icons/alfa.svg';
import {Button} from "../UI/Button/Button";
import Select from "../UI/Select/Select";

const Quiz = () => {

    const amount = [
        '100 000 - 500 000 руб.',
        '500 000 - 1 000 000 руб.',
        '1 000 000 - 3 000 000 руб.',
        '3 000 000 - 10 000 000 руб.',
        '10 000 000 - 30 000 000 руб.',
    ]
    const term = [
        'От 6 до 12 месяцев',
        ' От 12 до 24 месяцев',
        'От 24 до 48 месяцев',
        'От 48 до 60 месяцев',
    ]
    const loanType = [
        'Займ в банке',
        'Займ у частного инвестора',
    ]
    const pledge = [
        'Дом',
        'Квартира',
        'Комната',
        'Коммерция',
        'Земельный участок',
    ]
    const sendDecision = [
        'Телефон',
        'WhatsApp',
        'Viber',
        'Telegram',
    ]
    const city = [
        'Москва',
        'Санкт-Петербург',
        'Самара',
        'Казань',
    ]

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')

    return (

        <div className={s.quiz}>
            <div className={`${style.container} ${s.quizContainer}`}>
                <div className={s.quizItems}>
                    <h1>
                        Ответьте на 5 вопросов
                    </h1>
                    <div className={s.quizTitle}>
                         и получите решение на одобрение заявки без подтверждения дохода и с любой кредитной историей
                    </div>
                    <QuizItem title={'Сумма займа, рублей'}
                              name='amount'
                              options={amount}
                              value={value1}
                              setValue={setValue1}/>
                    <QuizItem title={'Срок займа, месяцев'}
                              name='term'
                              options={term}
                              value={value2}
                              setValue={setValue2}/>
                    <QuizItem title={'Вид займа'}
                              name='loanType'
                              options={loanType}
                              value={value3}
                              setValue={setValue3}/>
                    <QuizItem title={'Объект залога'}
                              name='pledge'
                              options={pledge}
                              value={value4}
                              setValue={setValue4}/>
                    <QuizItem title={'Куда отправить решение о займе?'}
                              name='sendDecision'
                              options={sendDecision}
                              value={value5}
                              setValue={setValue5}/>
                    <div className={s.form}>
                        <span className={s.title}>
                            <h4>
                                Ваши контактные данные
                            </h4>

                        </span>
                        <div className={s.formItems}>
                            <Input placeholder={'Ваше имя'}/>
                            <Input placeholder={'Номер телефона'}/>
                            <Select options={city}/>
                            <Button>Получить одобрение</Button>
                            <div className={s.formFooter}>
                                <h5>
                                    Нажимая кнопку, вы даёте согласие на обработку
                                    персональных данных согласно
                                </h5>
                                <a>
                                    <h5>
                                        политике конфеденциальности
                                    </h5>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div className={s.iconsContainer}>
                        <Rosreestr className={s.icon}/>
                        <SingMe className={s.icon}/>
                        <Sovkom className={s.icon}/>
                        <Tinkoff className={s.icon}/>
                        <Alfa className={s.icon}/>
                    </div>
                </div>
                <div className={s.progressBar}>
                    Вы прошли почти весь путь до одобрения
                </div>
            </div>

        </div>
    );
};

export default Quiz;
