import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from "react-bootstrap";

import "../../../custom-bootstrap-coloring.scss";

export default function NavBar() {
  return (
    <Navbar expand="sm" bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="https://bsu.by/">
          <img
            alt=""
            src={require('../../../drawable/app-components-icons/navbar-logo.svg').default}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Интерактивная карта</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scientists">
              <Nav.Link>Дорогами ученых</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>О Проекте</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/in-development">
              <Nav.Link>Здания</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/in-development">
              <Nav.Link>Люди</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/in-development">
              <Nav.Link>Контакты</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>          
      </Container>
    </Navbar>
  );
}