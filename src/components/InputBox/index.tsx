/* style */
import style from './style.module.scss';
/* Hooks */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../../context/ErrorContext';
import { useTranslation } from 'react-i18next';
/* Components */
import { PrimaryBtn } from '../PrimaryBtn';
import { SecondaryBtn } from '../SecondaryBtn';

export const InputBox = () => {
    /* Hooks */
    const navigate = useNavigate();
    const { t } = useTranslation();
    /* State */
    const [pasteBtnFocus, setPasteBtnFocus] = useState(false);
    const { errors, setErrors } = useErrorContext();
    /* Refs */
    const input = useRef<HTMLTextAreaElement | null>(null);
    const pasteBtn = useRef<HTMLButtonElement | null>(null);

    /* const [errors, setErrors] = useState<string[]>([]); */
    const [numValues, setNumValues] = useState(0);
    const [values, setValues] = useState<string[]>();

    useEffect(() => {
        pasteBtn?.current?.focus();
        pasteBtnFocus;
    }, []);


    function isNumeric(str: string) {
        if (typeof str != "string") return false; // we only process strings!  
        return parseFloat(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    const handlePasteBtn = () => {
        navigator.clipboard.readText()
            .then(text => {
                if (input.current) {
                    input.current.value = text;
                    handlePaste(text);
                }
            }).catch(err => {
                setErrors([t('pasteError')]);
                console.log(err);
            });
    }

    const handlePaste = (value: string) => {
        const values = value.split(/\r?\n/);

        if (values.length < 2) {
            setErrors((prev) => {
                const nErrors = [...prev];
                nErrors.push(t('notEnoughtError'));
                return nErrors;
            });
            return;
        };

        setNumValues(values.length);
        setValues(values);

        const errorList: string[] = [];

        values.forEach(el => {
            if (!isNumeric(el)) {
                if (el === '') {
                    errorList.push(t('blankCellsError'));
                }
                else {
                    errorList.push(`${t('invalidElError')} "${el}"`);
                }
            }
        });

        if (errorList.length !== 0) {
            setErrors(errorList);
            return;
        };

        if (errorList.length === 0) {
            return handleCalculate(values);
        }

        setErrors([t('error')]);
        return;
    }

    const handleClearErrors = () => {
        setErrors([]);
        if (input.current?.value) {
            input.current.value = '';
            pasteBtn?.current?.focus();
        }
    }

    const handleCalculate = (values: string[] | undefined) => {
        if (!values) return;
        const cleanValues = values.filter((el) => isNumeric(el));
        return navigate('/results', { state: { data: cleanValues } });
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <textarea
                className={style['inputBox']}
                ref={input}
                onPaste={(e) => handlePaste(e.clipboardData.getData('Text'))}
            />
            <div className={`${errors.length === 0 ? 'd-block' : 'd-none'} mt-3 text-center`}>
                <PrimaryBtn
                    ref={pasteBtn}
                    onClick={handlePasteBtn}
                    onFocus={() => setPasteBtnFocus(true)}
                    onBlur={() => setPasteBtnFocus(false)}
                >
                    {t('mainpage-cta')}
                </PrimaryBtn>
            </div>
            <div
                className={`
                    ${errors.length > 0 ? 'd-flex' : 'd-none'} w-75 gap-2 my-3 justify-content-center`
                }>
                <SecondaryBtn
                    onClick={() => handleClearErrors()}
                >
                    {t('mainpage-clearBtn')}
                </SecondaryBtn>
                <PrimaryBtn
                    hidden={numValues < 2}
                    onClick={() => {
                        handleClearErrors();
                        handleCalculate(values);
                    }}
                >
                    {t('mainpage-clearAndContinueBtn')}
                </PrimaryBtn>
            </div>
        </div>
    )
}
