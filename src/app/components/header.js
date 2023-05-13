'use client';

//Import plugins
import {React, useEffect, useState
} from 'react';
import Image from 'next/image';
import {Navbar,
    Container,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Import components
// Import media
// Import styles
import styles from '../../scss/header.module.scss'

function Header(props) {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    

    useEffect(() => {
        const navLink = document.getElementsByClassName('scroll-to');
        const scrollToEle = (id) => {
            var position = document.getElementById(id).getBoundingClientRect().top;
            var offsetPosition = position + window.pageYOffset - 90;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    
        window.addEventListener('scroll', handleScroll)
        for(var i = 0 ; i < navLink.length; i++){
            navLink[i].addEventListener('click', function(e){
                e.preventDefault();
                var target = this.getAttribute('href');
                scrollToEle(target);
            })
        }
    }, [])

    return (
        <div id='home'>
            {/* <nav className={`${styles.nav} navbar navbar-expand-lg`}>
                <div className="container">
                    <a className={`${styles.logo}`} href="/">
                        <Image src="/1st-step-logo-wht.svg" fill={true} style={{objectFit: 'contain'}} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> */}
            <Navbar className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} expand="lg" collapseOnSelect='true' >
                <Container className='py-3 '>
                    <a className={`${styles.logo}`} href="/">
                        <Image src="/1st-step-logo-wht.svg" fill={true} style={{objectFit: 'contain'}} alt="Logo" />
                    </a>
                    <Navbar.Toggle>
                        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end d-none d-lg-block">
                        <Nav className="me-auto" >
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}home`}>Home</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}features`}>About Us</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}pricing`}>Services</Nav.Link>
                            <Nav.Link href="contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container fluid className='g-0 text-center bg-lg-main mt-lg-0 d-block d-lg-none'>
                    <Navbar.Collapse className="justify-content-end py-2 py-sm-3">
                        <Nav className="me-auto">
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}home`}>Home</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}features`}>About Us</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'}`} href={`${props.page == 'contact' ? '/#' : ''}pricing`}>Services</Nav.Link>
                            <Nav.Link href="contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;