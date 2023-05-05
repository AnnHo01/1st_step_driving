'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
// Import components
import Header from './components/header'
// Import media
// Import styles

export default function Home() {
  return (
    <>
      <Header />
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
        <section className='bg-blue'>
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
        <section className='bg-blue'>
          <Container>
            <Row>
              <Col>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}
