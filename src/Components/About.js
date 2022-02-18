import React from 'react';
import { Row, Container, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import img from '../images/logo.png'

export default function About() {
    return (
        <>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Image src={img} alt='logo' className='m-sm-0 mt-sm-5 m-lg-5 p-sm-0 p-lg-5 col-md-6 col-lg-4'
                        style={{
                            filter: "drop-shadow(-7px 4px 4px #656178)"
                        }} />
                    <div className='m-sm-0  mt-sm-5 m-lg-5 p-sm-0 pe-sm-3 col-sm-6 col-lg-4 align-self-center text-center'>
                        <h1>Snobz</h1>
                        <h2>Directory of third-wave, specialty coffee roasters and shops.</h2>
                        <p>Third-wave coffee is a term used to described quality specialty coffee. We love our small-batch
                            local coffees made with passion and love. The coffee roasters and shops on this list were hand picked
                            by the official Coffee SNOBZ. If you have any recommendations use the feedback button.</p>
                        <Link to='/'>
                            <Button variant="danger" className='btn bg-danger text-light w-25 mt-3 mb-5 m-sm-0 p-1'>Return To Home</Button>
                        </Link>
                    </div>

                </Row>
            </Container>
        </>
    )
}
