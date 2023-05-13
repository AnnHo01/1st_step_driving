'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
// Import components
import Header from './components/header'
import Footer from './components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
// Import media
// Import styles
import styles from '../scss/main.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      
      <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-1.jpg")'}}>
          <Container className='overlay dark d-flex justify-content-center align-items-center'>
              <Row>
                  <Col className='text-center'>
                      <h1 className='text-center'>Learn to Drive <br className='d-block d-sm-none' />with Confidence</h1>
                      <p className='text-white mb-4'>Enroll in our professional driving school today</p>
                      <Link href="contact" className='text-uppercase call_btn'>
                          Book Now
                      </Link>
                  </Col>
              </Row>
          </Container>
      </header>
      <main>
        <section>
          <Container>
            <Row>
              <Col className='text-center'>
                <h2>Why Choose Us?</h2>
                <p>At 1st Step Driving School, we understand that choosing a driving school is an important decision. That's why we've created a learning environment that is safe, supportive, and fun. Here are just a few reasons why you should choose us for your driving education:</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-blue' id='features'>
          <Container>
            <Row>
              <Col lg={6} xs={12} className='gx-0 gx-lg-4 mb-4'>
                <div className='position-relative img-cont'>
                  <Image src="/success-driver.jpg" alt="Successful driver" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className='d-flex align-items-center'>
                      <div className='line-style me-3'></div>
                      <h2>Experienced Instructors</h2>
                    </div>
                    <p>All of our instructors are highly experienced and knowledgeable about the latest road rules and regulations. They are patient, friendly, and dedicated to helping you become a safe and confident driver on the road.</p>
                  </Col>
                </Row>
                
                <Row>
                  <Col className='text-end'>
                    <div className='d-flex align-items-center justify-content-end'>
                      <h2>Safety First</h2>
                      <div className='line-style ms-3'></div>
                    </div>
                    <p className='mb-0'>We take safety seriously and prioritize it in everything we do. Our vehicles are equipped with dual controls, ensuring that our instructors can take control of the car in the event of an emergency. We also conduct regular maintenance checks to ensure that our vehicles are always in top condition.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg={6} xs={12} className='gx-0 gx-lg-4 mb-4'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className='d-flex align-items-center'>
                      <div className='line-style me-3'></div>
                      <h2>Flexible Scheduling</h2>
                    </div>
                    <p>We understand that everyone's schedule is different, which is why we offer flexible scheduling options. We'll work with you to find a lesson time that suits your busy lifestyle, whether that's in the morning, afternoon, or evening.</p>
                  </Col>
                </Row>
                
                <Row>
                  <Col className='text-end'>
                    <div className='d-flex align-items-center justify-content-end'>
                      <h2>Affordable Pricing</h2>
                      <div className='line-style ms-3'></div>
                    </div>
                    <p className='mb-0'>We believe that high-quality driving education should be accessible to everyone, which is why we offer affordable pricing options. We also offer package deals for multiple lessons, which can help you save money and become a better driver faster.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-blue text-center' id='pricing'>
          <Container>
            <Row>
              <Col>
                <div className={`${styles.stop_icn}`}>
                  <Image src="/stop-sign.svg" alt="Stop Sign Icon" fill={true} style={{objectFit: 'cover'}} />
                </div>
                <h2>Comprehensive Course Options</h2>
                <p>We offer a range of Comprehensive course options to suit all levels of driving experience.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col xs={12} className='mb-3 g-0'>
                    <div className={`${styles.course}`}>
                      <h3>2 Hour Lesson</h3>
                      <p>Includes<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Use of vehicle with break assistance<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Parallel Parking Lesson
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} className='mb-3 g-0'>
                    <div className={`${styles.course}`}>
                      <h3>1.5 Hour Lesson</h3>
                      <p>Includes<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Use of vehicle with break assistance<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Parallel Parking Lesson
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} className='mb-3 g-0'>
                    <div className={`${styles.course}`}>
                      <h3>1 Hour Lesson</h3>
                      <p>Includes<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Use of vehicle with break assistance<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Parallel Parking Lesson
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className='mb-3 g-0'>
                    <div className={`${styles.course}`}>
                      <h3>Road Test Package</h3>
                      <p>Includes<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      An hour practice before the road test<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      Use of vehicle for the road test
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} className='mb-3 g-0'>
                    <div className={`${styles.course}`}>
                      <h3>5 Lessons Package</h3>
                      <p>Includes<br />
                      <FontAwesomeIcon icon={faCircle} style={{fontSize: '9px', marginBottom: '2px', marginRight: '15px'}}/>
                      5 lessons x 1.5 hours long
                      </p>
                    </div>
                  </Col>
                  <Col className='text-start py-2'>* Pricing is different for those who live far away from South West of Winnipeg</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className={`${styles.cone_icn}`}>
            <Image src='/cone.svg' alt="Traffic Cone" fill={true} style={{objectFit: 'cover'}} />
          </div>
        </section>
        <section>
          <Container>
            <Row>
              <Col className='text-center'>
                <h2>What Students Think About Us?</h2>
                <div>
                  <FontAwesomeIcon icon={faQuoteLeft} style={{color: '#0672A0', fontSize: '39px', float: 'left'}} />
                  <p className='px-3' style={{paddingTop: '60px'}}>I had Bobby as my driving teacher. He was nice, patient, and understanding. I didn't pass the first time, but passed the second time. I took a lot of lessons, but understood that passing this road test is mostly based on luck. Bobby helped me gain driving experience from not knowing how to drive at all, to being comfortable and confident in my driving abilities, thank you!<br/><span className='fw-semibold'>Emily .K</span></p>
                  <FontAwesomeIcon icon={faQuoteRight} style={{color: '#0672A0', fontSize: '39px', float: 'right'}} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col xs={12} className='py-3'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col xs={12} className='py-3'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col xs={12} className='py-3'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col xs={12} className='py-3'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col xs={12} className='py-3'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-blue text-center'>
          <Container>
            <Row>
              <Col className='mb-3'>
                <h2 className='text-uppercase'>Book Your Appointment Today</h2>
                <p className='mb-4'>Ready to hit the road? Book your driving lesson today and take the first step towards becoming a confident and safe driver!</p>
                <Link href="/" className='text-uppercase call_btn'>
                    Book Now
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer style={{marginTop: '-40px'}}/>
    </>
  )
}
