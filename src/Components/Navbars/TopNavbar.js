import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap'
import OffCanvas from '../Offcanvas/OffCanvas';
import Search from './Search';
export default function TopNavbar() {
  const [show, setShow] = useState(false);

  const closeOffCanvas = () => setShow(!show);

  return (
    <>
      <Navbar bg="light" expand={false} >
        <Container fluid>
          <Button onClick={() => setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20"
              fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16">
              <path
                d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          </Button>

          <Search />

          <OffCanvas show={show} hide={closeOffCanvas} ></OffCanvas>
        </Container>
      </Navbar>
    </>
  )
}
