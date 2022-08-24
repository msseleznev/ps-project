import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Radio.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Radio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((option, index) => (

        <label className={style.lRadio} key={name + '-' + index}>
            <input type="radio"
                   name={name}
                   checked={option === value}
                   value={option}
                   onChange={onChangeCallback}/>
            <span>{option}</span>
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
};
