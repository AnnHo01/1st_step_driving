'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import { InlineWidget } from 'react-calendly';
// Import components
import Header from '../components/header'
import Footer from '../components/footer';
// Import media
// Import styles

export default function Home() {
  return (
    <>
      <Header page={'contact'}/>
      <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-contact.jpg")'}}>
          <Container className='overlay dark d-flex justify-content-center align-items-center'>
              <Row>
                  <Col className='text-center'>
                      <h1 className='text-center'>Book Your Appointment <br className='d-block d-sm-none' />Today</h1>
                      <Link href="contact" className='text-uppercase call_btn'>
                          Learn More
                      </Link>
                  </Col>
              </Row>
          </Container>
      </header>
      <main>
        <section>
            <Container>
                <Row>
                    <Col>
                        <InlineWidget url="https://calendly.com/1ststepdrivingschool/30min" style={{height: '100%'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>*If you want to reschedule, please give us a one day heads up in advance</p>
                    </Col>
                </Row>
            </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
