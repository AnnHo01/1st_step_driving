'use client';

//Import plugins
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Import components
import Header from '../components/header'
import Footer from '../components/footer';
import { useEffect } from 'react';
// Import media
// Import styles
import styles from '../../scss/main.module.scss';

export default function Home() {
    const router = useRouter();

    async function handleSubmit(e){
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        router.push('/thanks');
      }
    }

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
        <section id="more">
            <Container>
              <Row className='d-flex justify-content-center'>
                <Col className="text-center" xs={12} lg={8}>
                  <h2>Ready to Get Started?</h2>
                  <p className="pt-3">Fill out the form below to secure your spot. Whether you have a specific question or are ready to get started, we&apos;ll get back to you within 24 hours to finalize the details.</p>
                </Col>
              </Row>
                <Row>
                    <Col>
                      <form className={`${styles.exp_form}`} name="contact_form" method="POST" onSubmit={handleSubmit} action='/thanks' netlify>
                        <input type="hidden" name="form-name" value="contact_form" />
                        <Container className="p-5">
                          <Row className='d-flex justify-content-center' style={{gap: '40px'}}>
                            <Col xs={12} lg={8}>
                              <label className="fw-bold" htmlFor='fname'>Name*</label>
                              <input type='text' id='fname' name='fname' placeholder='Type Your Name' />
                            </Col>
                            <Col xs={12} lg={8}>
                              <label className="fw-bold" htmlFor='email'>Email*</label>
                              <input type='email' id='email' name='email' placeholder='Type Your Email' required />
                            </Col>
                            <Col xs={12} lg={8}>
                              <label className="fw-bold" htmlFor='pnum'>Phone Number</label>
                              <input type='number' id='pnum' name='pnum' placeholder='Type Your Phone' />
                            </Col>
                            <Col xs={12} lg={8}>
                              <label className="fw-bold" htmlFor='fname'>Leave us a note</label>
                              <textarea id='experience' name='experience' rows={4} placeholder='Ask us anything'></textarea>
                            </Col>
                            <Col xs={12} lg={8} className='d-flex justify-content-center'>
                              <button type="submit" className='text-uppercase call_btn'>
                                <div>
                                <span>Connect Now</span>
                                <span>Connect Now</span>

                                </div>
                            </button>
                            </Col>
                          </Row>
                        </Container>
                      </form>
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
