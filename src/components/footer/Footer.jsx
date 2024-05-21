import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Container fluid className="m-0 py-5 text-light" bg="dark">
        <Row>
          <Col className="col-xl">
            <h5>Starview</h5>
          </Col>

          <Col className="fs-3 text-end mx-4 ">
            <FaFacebook />
            <FaInstagram />
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className="fs-6 text-center">Sobre nosotros</h6>
          </Col>
          <Col>
            <h6 className="fs-6 text-center">Contacto</h6>
          </Col>
          <Col>
            <h6 className="fs-6 text-center">Servicios</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0 "
              >
                Nuestro equipo
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                Correo
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                Nuestras ubicaciones
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                Nuestra historia
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                Teléfono
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                Viajes
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                LINK
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                LINK
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={"#"}
                className="link-light link-underline link-underline-opacity-0"
              >
                LINK
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
