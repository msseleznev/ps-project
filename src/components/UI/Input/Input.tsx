import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    customStyle?: string
}

export const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        name,
        title,
        customStyle,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value)
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    };

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`;
    const finalInputClassName = `${error ? `${s.errorInput} ${s.superInput}` : s.superInput} ${className}`;

    return (
        <div className={customStyle ? `${customStyle} ${s.inputWrapper}` : s.inputWrapper}>
            <input name={name}
                   type={type}
                   onChange={onChangeCallback}
                   onKeyPress={onKeyPressCallback}
                   className={finalInputClassName}
                   {...restProps}
            />
            {error && <div className={finalSpanClassName}>{error}</div>}
        </div>
    )
};


