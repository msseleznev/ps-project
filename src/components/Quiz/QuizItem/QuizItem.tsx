import React from 'react';
import s from "./QuizItem.module.scss";
import {Radio} from "../../UI/Radio/Radio";

type QuizPropsType = {
    name: string
    title: string
    options: string[]
    value: string
    setValue: (option: string) => void
}

const QuizItem: React.FC<QuizPropsType> = (
    {
        title,
        options,
        value,
        setValue,
        name
    }) => {

    return (

        <div className={s.quizItem}>
            <div className={s.title}>
                {title}
            </div>
            <Radio
                name={name}
                options={options}
                onChangeOption={setValue}
                value={value}/>
        </div>
    );
};

export default QuizItem;
