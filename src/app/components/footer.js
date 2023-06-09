//Import plugins
import React from 'react';
import Image from 'next/image';
import { Container,
    Row,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
// Import styles
import styles from '../../scss/footer.module.scss'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

function Footer(props) {
    return (
        <footer className={`position-relative`} style={props.style}>
            <Container className='py-0'>
                <Row>
                    <Col>
                        <div className={`${styles.car}`}>
                            <Image src="/car.svg" fill={true} style={{objectFit: 'contain'}} alt="Car icon" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.road}`}>
                <Container className={`py-4 py-lg-5`}>
                    <Row>
                        <Col className='text-center pb-3 d-flex align-items-center pe-lg-5' xs={12} lg={3}>
                            <a className={`${styles.logo}`} href="/">
                                <Image src="/1st-step-logo.svg" fill={true} style={{objectFit: 'contain'}} alt="Logo" />
                            </a>
                        </Col>
                        <Col xs={12} lg={9}>
                            <Row>
                                <Col xs={12} lg={3} className='py-2 py-lg-0 ps-lg-4'>
                                    <h6>Quick Links</h6>
                                    <ul className={`${styles.angle_list}`}>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} style={{marginRight: '15px'}} />
                                            <a href='/'>Home</a>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAngleRight} style={{marginRight: '15px'}} />
                                            <a href='/contact'>Contact Us</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={12} lg={5} className='py-2 py-lg-0'>
                                    <h6>Contact</h6>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faMap} style={{color: '#0672A0', float: 'left', fontSize: '26.67px', marginRight: '15px', marginBottom: '5px'}}/>
                                            <p>Service Area<br/>
                                            <span className='fw-semibold'>Winnipeg and surrounding area</span></p>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faMobileScreenButton} style={{color: '#0672A0', float: 'left', fontSize: '30px', marginRight: '20px'}}/>
                                            <p>Call Us<br/>
                                            <a href="tel:2042918704" className='fw-semibold'>(204) 291 - 8704</a></p>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} style={{color: '#0672A0', float: 'left', fontSize: '30px', marginRight: '15px'}}/>
                                            <p>Email Us<br/>
                                            <a href="mailto:%69am%62o%62byka%75sh%61l@%67mail.%63o%6D" className='fw-semibold'>iambobbykaushal@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={12} lg={4} className='py-2 py-lg-0'>
                                    <h6>Hours of Services</h6>
                                    <ul>
                                        <li>
                                            <p><span className='fw-semibold'>Monday - Friday</span><br />
                                            7:00am - 5:00pm</p>
                                        </li>
                                        <li>
                                            <p><span className='fw-semibold'>Saturday</span><br />
                                            7:00am - 3:00pm</p>
                                        </li>
                                        <li>
                                            <p>After hours appointments available<br />
                                            Emergency appointments available</p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>&#169; 2023 1st Step Driving School. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;