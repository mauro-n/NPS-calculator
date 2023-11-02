import style from './style.module.scss'
import { forwardRef } from 'react';


interface PrimaryBtnProps extends React.ComponentPropsWithRef<'button'> {
    //fooBar?: string;
}

export const PrimaryBtn = forwardRef<HTMLButtonElement, PrimaryBtnProps>(
    (props, ref) => {
        return (
            <button
                className={style['primaryBtn']}
                {...props}
                ref={ref}
            >
                {props.children}
            </button>
        )
    });
