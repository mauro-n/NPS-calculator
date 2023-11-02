/* style */
import style from './style.module.scss';
import { Container } from "react-bootstrap";
/* Components */
import { BarChart } from "../../components/BarChart"
import { MainNavbar } from "../../components/Navbar";
import { RadialChart } from "../../components/RadialChart"
import { Heading } from "../../components/Heading";
import { PrimaryBtn } from "../../components/PrimaryBtn";
import { motion } from "framer-motion";
/* Hooks */
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const ResultsPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const values = location?.state?.data;
    const navigate = useNavigate();
    let resultText: string;
    if (!values || values.length === 0) {
        return <Navigate to='/' />
    };

    const total = values.length;
    const detractors = values.filter((el: number) => el < 7);
    const passives = values.filter((el: number) => el > 6 && el < 9);
    const promoters = values.filter((el: number) => el > 8);
    const detractorsPerc = ((detractors.length / total) * 100).toFixed(2);
    const promotorersPerc = ((promoters.length / total) * 100).toFixed(2);
    const npsScore = (parseFloat(promotorersPerc) - parseFloat(detractorsPerc)).toFixed(0);
    const nps = parseFloat(npsScore);

    if (nps < 0) {
        resultText = t('results-bellow0');
    } else if (nps < 30) {
        resultText = t('results-bellow30');
    } else if (nps < 50) {
        resultText = t('results-bellow50');
    } else {
        resultText = t('results-bellow70');
    }


    const data = [{
        name: t('results-detractors'),
        data: [detractors.length]
    }, {
        name: t('results-passives'),
        data: [passives.length]
    }, {
        name: t('results-promotors'),
        data: [promoters.length]
    }];

    return (
        <>
            <MainNavbar />
            <Container>
                <motion.div
                    className={style['page-content']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween' }}
                >
                    <div className={style['floating-goback']}>
                        <PrimaryBtn
                            onClick={() => { navigate(-1) }}
                        >
                            {t('results-goback')}
                        </PrimaryBtn>
                    </div>
                    <Heading>
                        {t('results-heading1')}
                    </Heading>
                    <RadialChart
                        series={[parseInt(npsScore)]}
                        label='Nps Score'
                    />
                    <BarChart
                        id='barchart1'
                        colors={['#FF6161', '#3788F3', '#3CE939']}
                        data={data}
                    />
                    <div className="mt-5 mb-4 d-flex flex-column w-75 align-items-center gap-4">
                        <Heading>
                            {t('results-heading2', {nps})}
                        </Heading>
                        <p className="align-self-start">
                            {resultText}
                        </p>
                    </div>

                </motion.div>
            </Container>
        </>
    )
}
