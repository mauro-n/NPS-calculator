/* style */
import style from './style.module.scss';
import { Container } from "react-bootstrap";
/* Components */
import { Heading } from "../../components/Heading";
import { MainNavbar } from "../../components/Navbar"
import { InputBox } from "../../components/InputBox";
import { motion } from "framer-motion";
/* Hooks */
import { useErrorContext } from '../../context/ErrorContext';
import { useTranslation } from 'react-i18next';
/* Assets */
import npsGif1 from '../../assets/nps_1.gif';

export const HomePage = () => {
    const { errors } = useErrorContext();
    const { t } = useTranslation();

    return (
        <>
            <MainNavbar />
            <Container >
                <motion.div
                    className={style['page-content']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween' }}
                >
                    <Heading size={5} strength={2}>
                        {t('mainpage-heading1')}
                    </Heading>
                    <div className="mt-4">
                        <InputBox />
                    </div>
                    <div className='w-75'>
                        {
                            errors ? errors.map(((el, i) => {
                                if (i > 4) return;
                                return <p className='text-danger m-0' key={i}>{el}</p>
                            })) : ''
                        }
                    </div>
                    <div className="mt-5 mb-4 d-flex flex-column w-75 align-items-center gap-4">
                        <Heading size={5}>
                            {t('mainpage-heading2')}
                        </Heading>
                        <p className="mt-3 align-self-start">
                            <strong>1.</strong> {t('mainpage-step1')}
                        </p>
                        <img src={npsGif1} className='w-100' alt="" />
                        <p className="align-self-start">
                            <strong>2.</strong> {t('mainpage-step2')}
                        </p>
                        <p>
                            {t('mainpage-auxText')}
                        </p>

                        <Heading size={4}>
                            {t('mainpage-heading3')}
                        </Heading>
                        <p>
                            {t('mainpage-netscore')}
                            &nbsp;
                            <a href="https://pt.wikipedia.org/wiki/Net_Promoter_Score">
                                <cite>{t('mainpage-font')}</cite>
                            </a>
                        </p>
                    </div>
                </motion.div>
            </Container>
        </>
    )
}
