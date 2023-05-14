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

    

    useEffect(() => {
        
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > 200) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

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
            <Navbar className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} expand="lg" collapseOnSelect='true' >
                <Container className='py-3 '>
                    <Link className={`${styles.logo}`} href="/">
                        <Image src="/1st-step-logo-wht.svg" fill={true} style={{objectFit: 'contain'}} alt="Logo" />
                    </Link>
                    <Navbar.Toggle>
                        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end d-none d-lg-block">
                        <Nav className="me-auto" >
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'} me-3`} href={`${props.page == 'contact' ? '/#' : ''}home`}>Home</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'} me-3`} href={`${props.page == 'contact' ? '/#' : ''}features`}>About Us</Nav.Link>
                            <Nav.Link className={`${props.page == 'contact' ? '' : 'scroll-to'} me-3`} href={`${props.page == 'contact' ? '/#' : ''}pricing`}>Services</Nav.Link>
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