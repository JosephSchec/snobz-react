
import React, { useState } from 'react';
import img from '../../images/logo.png';
import { Offcanvas, Nav, Image } from 'react-bootstrap'
import FeedBack from './FeedBack';
export default function OffCanvas(props) {
    const { show, hide } = props;

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(!showModal);

    return (<>
        <Offcanvas show={show} onHide={hide}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <div className='container d-flex justify-content-center offCanvasImg'>
                    <Image src={img} alt='logo' className='' />
                </div>
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href='/' className='fs-2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        fill="currentColor" className="bi bi-house mb-1 me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd"
                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>Home</Nav.Link>
                    <Nav.Link href='/About' className='fs-2 '><svg xmlns="http://www.w3.org/2000/svg" width="25"
                        height="25" fill="currentColor" className="bi bi-info-circle mb-1 me-2" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>About</Nav.Link>
                    <Nav.Link className='fs-2' onClick={closeModal} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill="currentColor" className="bi bi-chat-left-text mb-1 me-2" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path
                                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>Feedback
                    </Nav.Link>

                    <Nav.Link href="mailto:user@example.com?subject=Sharing the SNOBZ app with you&body=To view SNOBZ on your device, click on https://snobzz.vercel.app/" className='fs-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill="currentColor" className="bi bi-share mb-1 me-2" viewBox="0 0 16 16">
                            <path
                                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>Share
                    </Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        <FeedBack show={showModal} hide={closeModal} />
    </>)
}
