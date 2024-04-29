import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

import '../../../custom-bootstrap-coloring.scss';

export default function EditorNavbar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <NavbarBrand>
          Редактор
        </NavbarBrand>
        <Nav className="me-auto">
          <LinkContainer to="/editor">
            <Nav.Link>Здания</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/editor">
            <Nav.Link>Ученые</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>На главную</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}