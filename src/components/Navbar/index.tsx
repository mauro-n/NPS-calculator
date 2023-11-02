/* style / components */
import style from './style.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* Assets */
import brFlag from '../../assets/brFlag.svg';
import enFlag from '../../assets/usFlag.svg';
/* Hooks */
import { useTranslation } from 'react-i18next';

export const MainNavbar = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
        return;
    }

    return (
        <Navbar expand="md"
            className={`${style['navbar']}`}
        >
            <Container>
                <Navbar.Brand className='text-white fw-bold' href="/">
                    {t('navbar-brand')}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mt-4 mt-md-0">
                        <Nav.Link className=' ms-auto me-auto text-white fw-bold' href="/">
                            {t('navbar-home')}
                        </Nav.Link>
                        <Nav.Link className='text-white fw-bold ms-auto me-auto' href="/">
                            {t('navbar-about')}
                        </Nav.Link>
                        <NavDropdown
                            className={`${style['navlink--dropdown']} d-none d-md-block`}
                            drop='down-centered'
                            title={t('navbar-lang')}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={() => changeLang('pt')}>
                                {t('navbar-lang1')}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => changeLang('en')}>
                                {t('navbar-lang2')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <ul className='d-flex d-md-none justify-content-center mt-4 list-unstyled gap-5'>
                            <li>
                                <img
                                    src={brFlag}
                                    className={style['nav-flag']}
                                    alt="Brazil Flag"
                                    onClick={() => changeLang('pt')}
                                />
                            </li>
                            <li>
                                <img
                                    src={enFlag}
                                    className={style['nav-flag']}
                                    alt="United States Flag"
                                    onClick={() => changeLang('en')}
                                />
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}