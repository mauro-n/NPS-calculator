import style from './style.module.scss';

type Heading = {
    as?: React.ElementType,
    children: string,
    center?: boolean,
    size?: 1 | 2 | 3 | 4 | 5 | 6,
    strength?: 1 | 2 | 3
}

export const Heading = ({
    as = 'h1',
    children,
    center = true,
    size,
    strength = 2 }: Heading) => {
    const As = as;
    return (
        <As className={`
        ${style['heading']}
        ${center ? style['center'] : ''}
        ${size ? style[`heading${size}`] : style['heading3']}
        ${style[`strength${strength}`]}
        `}
        >
            {children}
        </As>
    )
}