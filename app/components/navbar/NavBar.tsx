'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.jpg"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Топитель кисок</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Список котов</Nav.Link>
            <Nav.Link href="/messages">Сообщения</Nav.Link>
            <NavDropdown title="Профиль" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Настройки</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Редактирование котов
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
