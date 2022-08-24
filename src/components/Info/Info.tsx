import React from 'react';
import s from './Info.module.scss'


type InfoPropsType = {
    body: string
    Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const Info: React.FC<InfoPropsType> = (
    {
        body,
        Logo
    }) => {
    return (
        <div className={s.contentBlock}>
            <Logo/>
            <div className={s.content}>
                {body}
            </div>
        </div>
    );
};

export default Info;
