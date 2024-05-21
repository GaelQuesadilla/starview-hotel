import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/routes";
import { GiStarsStack } from "react-icons/gi";

export const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" className="navbar py-3" fixed="top" expand="md">
        <Container fluid>
          <Navbar.Brand to={ROUTES.INDEX} as={Link}>
            Starview <GiStarsStack />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto py-2">
              <Nav.Link as={Link} to={ROUTES.INDEX}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.ABOUT_US}>
                Sobre nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
