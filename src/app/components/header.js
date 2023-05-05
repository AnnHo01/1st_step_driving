'use client';

//Import plugins
import {React
} from 'react';
import Image from 'next/image';
import {Navbar,
    Container,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';
import Link from 'next/link';
// Import components
// Import media
// Import styles
import styles from '../../scss/header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <header>
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
            <Navbar className={`${styles.nav} py-3`} expand="lg">
                <Container>
                    <a className={`${styles.logo}`} href="/">
                        <Image src="/1st-step-logo-wht.svg" fill={true} style={{objectFit: 'contain'}} alt="Logo" />
                    </a>
                    <Navbar.Toggle>
                        <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end d-none d-lg-block">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container fluid className='g-0 text-center bg-lg-main mt-3 mt-lg-0 d-block d-lg-none'>
                    <Navbar.Collapse className="justify-content-end py-2 py-sm-3">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-img position-relative' style={{backgroundImage: 'url("/cover-1.jpg")'}}>
                <Container className='overlay dark d-flex justify-content-center align-items-center'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='text-center'>Learn to Drive <br className='d-block d-sm-none' />with Confidence</h1>
                            <p className='text-white mb-4'>Enroll in our professional driving school today</p>
                            <Link href="/" className='text-uppercase call_btn'>
                                Book Now
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
}

export default Header;