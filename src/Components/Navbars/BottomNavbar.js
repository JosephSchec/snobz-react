import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function BottomNavbar() {

    return (
        <>
            <Navbar bg="light" variant="light" className='m-0'expand={false}>
                <Container>
                    <Nav className="me-auto col-12 justify-content-center">
                        <Nav.Link href="/" className='col-6 text-center '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            id="mapicon" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg> Map</Nav.Link>
                        <Nav.Link href="/List" className='col-6 text-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
