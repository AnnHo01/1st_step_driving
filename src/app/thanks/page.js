'use client';

//Import plugins
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
// Import components
// Import media
// Import styles
import styles from '../../scss/main.module.scss';
import Header from '../components/header'
import { useSearchParams } from 'next/navigation';

function Home() {
  const search = useSearchParams();
  const form = search.get('form');

  return (
    <>
    <Header page={'contact'} />
    <header className='bg-img position-relative' style={{backgroundImage: 'url("/cover-contact.jpg")'}}>
        <div className='overlay dark d-flex align-items-end align-items-lg-center'>
          <Container>
              <Row>
                  <Col className='mb-3 mb-lg-0 headline'>
                      <h1>Thank you for your Submission!</h1>
                      <Link href="/" className='text-uppercase call_btn ms-0 mt-3'>
                        <div>
                            <span>Return Home</span>
                            <span>Return Home</span>
                          </div>
                      </Link>
                  </Col>
              </Row>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Home;