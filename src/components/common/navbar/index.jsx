import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../language-selector';

import '../../../custom-bootstrap-coloring.scss';

export default function NavBar() {
  const { t } = useTranslation();

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
              <Nav.Link>{t('navbar.buildings')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scientists">
              <Nav.Link>{t('navbar.scientists')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{t('navbar.about')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/in-development">
              <Nav.Link>{t('navbar.contacts')}</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LanguageSelector />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}