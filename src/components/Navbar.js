import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link'
//import { MdFingerprint } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
//import { ReactComponent as Logo } from './Homepage.svg'
import Logo from './logo.png'
import { Button } from './Button'
import './Navbar.css'
import ContactUs from '../pages/ContactUs/ContactUs'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <MdFingerprint className="navbar-icon" />
                            LAVISH */}
                            <img src={Logo} alt="bug" height={50} />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>Careers</Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    // <Link to="/contact-us" className="btn-link">
                                    <div className="btn-link">
                                        <Button onClick={openModal} buttonStyle="btn--outline">Contact Us</Button>
                                        {modalOpen && <ContactUs setOpenModal={setModalOpen} />}
                                    </div>
                                    // </Link>
                                ) : (
                                    // <Link to="/contact-us" className="btn-link" onClick={closeMobileMenu}>
                                    <div className="btn-link">
                                        <Button onClick={openModal} buttonStyle="btn--outline"
                                            buttonSize="btn--mobile">Contact Us</Button>
                                        {modalOpen && <ContactUs setOpenModal={setModalOpen} />}
                                    </div>
                                    // </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar