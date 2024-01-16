'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import { useEffect } from 'react';
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
  useEffect(() => {
    
    async function myEffect(){
      const WOW = (await import('wowjs')).default;
      const wow = new WOW.WOW();
      wow.init();
  
      return false;
    }

    myEffect();
  }, [])
  return (
    <>
      <Header />
      
      <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-1.jpg")'}}>
        <video muted loop autoPlay style={{width: '100%', height: '100%', objectFit: 'cover'}}>
          <source src="/cover.mp4" type="video/mp4" />
        </video>
        <div className='overlay dark d-flex justify-content-center align-items-center'>
          <Container className='wow slideInDown'>
              <Row>
                  <Col className='text-center'>
                      <h1 className='text-center'>Learn to Drive <br className='d-block d-sm-none' />with Confidence</h1>
                      <p className='text-white mb-4'>Enroll in our professional driving school today</p>
                      <Link href="/contact" className='text-uppercase call_btn'>
                          <div>
                            <span>Book Now</span>
                            <span>Book Now</span>
                          </div>
                      </Link>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
      <main>
        <section>
          <Container>
            <Row className='d-flex justify-content-center'>
              <Col className='text-center wow fadeInDown' lg={8}>
                <h2 className='mb-3 mb-lg-4'>Why Choose Us?</h2>
                <p>With over 30 years of driving experience, I understand how crucial it is to choose the right driving school for a successful and safe driving future. That&apos;s why at 1st Step Driving School, we have created an exceptional learning environment that prioritizes safety, support, and enjoyment. Here are just some reasons why our driving education program stands out as an excellent choice for you.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-blue' id='features'>
          <Container>
            <Row>
              <Col lg={{span: 6, order: 2}} xs={12} className='gx-0 gx-lg-4 mb-4 mb-lg-0'>
                <div className='position-relative img-cont'>
                  <Image src="/success-driver.jpg" alt="Successful driver" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='wow fadeInLeft'>
                <Row>
                  <Col className='mb-3 mb-lg-4'>
                    <div className='d-flex align-items-center mb-2 mb-lg-4'>
                      <div className='line-style me-3'></div>
                      <h2>Experienced Instructors</h2>
                    </div>
                    <p>Our patient, friendly instructors at 1st Step Driving School have over 30 years of experience. They&apos;re well-versed in the latest road rules and regulations, dedicated to helping you gain the skills needed to become a safe and confident driver.</p>
                  </Col>
                </Row>
                
                <Row>
                  <Col className='text-end'>
                    <div className='d-flex align-items-center justify-content-end mb-2 mb-lg-4'>
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
              <Col lg={6} xs={12} className='gx-0 gx-lg-4 mb-4 mb-4 mb-lg-0'>
                <div className='position-relative img-cont'>
                  <Image src="/working-student.jpg" alt="Hardworking Student" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='wow fadeInRight'>
                <Row>
                  <Col className='mb-3 mb-lg-4'>
                    <div className='d-flex align-items-center mb-2 mb-lg-4'>
                      <div className='line-style me-3'></div>
                      <h2>Flexible Scheduling</h2>
                    </div>
                    <p>We understand that everyone&apos;s schedule is different, which is why we offer flexible scheduling options. We&apos;ll work with you to find a lesson time that suits your busy lifestyle, whether that&apos;s in the morning, afternoon, or evening.</p>
                  </Col>
                </Row>
                
                <Row>
                  <Col className='text-end'>
                    <div className='d-flex align-items-center justify-content-end mb-2 mb-lg-4'>
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
                <h2 className='mb-2 mb-lg-3'>Comprehensive Course Options</h2>
                <p>We offer a range of Comprehensive course options to suit all levels of driving experience.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className='wow fadeInUp'>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>2 Hour Lesson</h3>
                      <p className={`${styles.price}`}>$130</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>1.5 Hour Lesson</h3>
                      <p className={`${styles.price}`}>$100</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>1 Hour Lesson</h3>
                      <p className={`${styles.price}`}>$70</p>
                    </div>
                  </Col>
                </Row>
                <Row className='d-flex justify-content-center wow fadeInUp'>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>Road Test Package</h3>
                      <p className={`${styles.price}`}>$140</p>
                      <p>*Inlcudes an hour practice before the road test and the use of vehicle for the road test.</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>5 Lessons Package I</h3>
                      <p className={`${styles.price}`}>$340</p>
                      <p>*Inlcudes 5 lessons, each 1 hour long.</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className='mb-3 g-0 g-lg-3'>
                    <div className={`${styles.course}`}>
                      <h3>5 Lessons Package II</h3>
                      <p className={`${styles.price}`}>$490</p>
                      <p>*Inlcudes 5 lessons, each 1.5 hours long.</p>
                    </div>
                  </Col>
                  <Col xs={12} lg={8} className='text-start py-2 py-lg-0'>
                    <p>* Pricing is different for those who live far away from South West of Winnipeg</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={`${styles.cone_icn}`}>
                      <Image src='/cone.svg' alt="Traffic Cone" fill={true} style={{objectFit: 'cover'}} />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row className='d-flex justify-content-center'>
              <Col xs={12} lg={8} className='text-center wow fadeInDown'>
                <h2 className='mb-3 mb-lg-4'>What Students Think About Us?</h2>
                <div>
                  <FontAwesomeIcon icon={faQuoteLeft} style={{float: 'left'}} className={`${styles.quote}`} />
                  <p className='px-3 px-lg-5' style={{paddingTop: '60px'}}>I had Bobby as my driving teacher. He was nice, patient, and understanding. I didn&apos;t pass the first time, but passed the second time. I took a lot of lessons, but understood that passing this road test is mostly based on luck. Bobby helped me gain driving experience from not knowing how to drive at all, to being comfortable and confident in my driving abilities, thank you!<br/><span className='fw-semibold'>Emily .K</span></p>
                  <FontAwesomeIcon icon={faQuoteRight} style={{float: 'right'}} className={`${styles.quote}`} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container fluid>
            <Row>
              <Col className='py-3 col-md-15 col-12 d-flex align-items-center'>
                <div className='position-relative gal-img gal-odd wow fadeInDown' data-wow-duration="0.5s">
                  <Image src="/gal-1.jpg" alt="1st Step Driving School Vehicle" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='py-3 col-md-15 col-12'>
                <div className='position-relative gal-img wow fadeInUp' data-wow-duration="0.5s" >
                  <Image src="/gal-2.jpg" alt="1st Step Driving School Vehicle" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='py-3 col-md-15 col-12 d-flex align-items-center'>
                <div className='position-relative gal-img gal-odd wow fadeInDown' data-wow-duration="0.5s">
                  <Image src="/gal-3.jpg" alt="1st Step Driving School Vehicle" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='py-3 col-md-15 col-12'>
                <div className='position-relative gal-img wow fadeInUp' data-wow-duration="0.5s">
                  <Image src="/gal-4.jpg" alt="1st Step Driving School Vehicle" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
              <Col className='py-3 col-md-15 col-12 d-flex align-items-center' >
                <div className='position-relative gal-img gal-odd wow fadeInDown' data-wow-duration="0.5s">
                  <Image src="/gal-5.jpg" alt="1st Step Driving School Vehicle" fill={true} style={{objectFit: 'cover'}} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bg-blue text-center'>
          <Container>
            <Row className='d-flex justify-content-center'>
              <Col xs={12} lg={8} className='mb-3 wow fadeInDown'>
                <h2 className='text-uppercase mb-3 mb-lg-4'>Book Your Appointment Today</h2>
                <p className='mb-4'>Ready to hit the road? Book your driving lesson today and take the first step towards becoming a confident and safe driver!</p>
                <Link href="/contact" className='text-uppercase call_btn wow heartBeat' data-wow-delay='2s'>
                    <div>
                      <span>Book Now</span>
                      <span>Book Now</span>
                    </div>
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
