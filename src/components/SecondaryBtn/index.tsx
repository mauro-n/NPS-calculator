import style from './style.module.scss'
import { forwardRef } from 'react';

interface SecondaryBtnProps extends React.ComponentPropsWithRef<'button'> { };

export const SecondaryBtn = forwardRef<HTMLButtonElement, SecondaryBtnProps>(
    (props, ref) => {
        return (
            <button
                className={style['secondaryBtn']}
                {...props}
                ref={ref}
            >
                {props.children}
            </button>
        )
    }
);
