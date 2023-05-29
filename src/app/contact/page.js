'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import { InlineWidget } from 'react-calendly';
// Import components
import Header from '../components/header'
import Footer from '../components/footer';
import { useEffect } from 'react';
// Import media
// Import styles

export default function Home() {

    useEffect(() => {
        const btn = document.getElementById('more_btn');
        const scrollToEle = (id) => {
            var position = document.getElementById(id).getBoundingClientRect().top;
            var offsetPosition = position + window.pageYOffset - 90;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }

        btn.addEventListener('click', function(e){
            e.preventDefault();
            var target = this.getAttribute('href');
            scrollToEle(target);
        })
    }, []);
  return (
    <>
      <Header page={'contact'}/>
      <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-contact.jpg")'}}>
        <div className='overlay dark d-flex justify-content-center align-items-center'>
          <Container>
              <Row>
                  <Col className='text-center'>
                      <h1 className='text-center'>Book Your Appointment <br className='d-block d-sm-none' />Today</h1>
                      <Link href="more" className='text-uppercase call_btn' id="more_btn">
                        <div>
                            <span>Learn More</span>
                            <span>Learn More</span>
                          </div>
                      </Link>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
      <main>
        <section id="more" className='pt-0'>
            <Container>
                <Row>
                    <Col>
                        <InlineWidget url="https://calendly.com/1ststepdrivingschool/1-5-hour-lesson" style={{height: '100%'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>*If you want to reschedule, please give us a one day heads up in advance</p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='bg-blue text-center'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col xs={12} lg={8} className='mb-3 wow fadeInDown'>
                        <h2 className='mb-3 mb-lg-4'>Contact Now</h2>
                        <p className='mb-4'>If you have any questions or would like to schedule a session directly with our instructor, don&apos;t hesitate to reach out! We&apos;re always happy to assist you.</p>
                        <Link href="tel:2042918704" className='text-uppercase call_btn wow heartBeat' data-wow-delay='2s'>
                            <div>
                            <span>Call Now</span>
                            <span>Call Now</span>
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
