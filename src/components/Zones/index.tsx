import style from './style.module.scss'

export const Zones = () => {
    return (
        <div className="d-flex flex-column 
        flex-md-row w-100 justify-content-center
        my-4 align-items-center text-center text-md-start">
            <div className='d-flex'>
                <div className={`${style['zone-critical']} ${style['zone']}`}>
                    Zona<br />crítica<br />
                    <span className={style['legend']}>-100 a 0</span>
                </div>
                <div className={`${style['zone-improvement']} ${style['zone']}`}>
                    Zona de<br />Aperfeiçoamento<br />
                    <span className={style['legend']}>1 a 50</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className={`${style['zone-quality']} ${style['zone']}`}>
                    Zona de<br /> Qualidade<br />
                    <span className={style['legend']}>51 a 75</span>
                </div>
                <div className={`${style['zone-excelency']} ${style['zone']}`}>
                    Zona de<br /> Excelência<br />
                    <span className={style['legend']}>76 a 90</span>
                </div>
                <div className={`${style['zone-charm']} ${style['zone']}`}>
                    Zona de<br /> Encantamento<br />
                    <span className={style['legend']}>91 a 100</span>
                </div>
            </div>
        </div>
    )
}
