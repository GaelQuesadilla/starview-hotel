import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as ROUTES from "../../routes/routes.js";

export const Footer = () => {
  return (
    <>
      <Container fluid className="m-0 py-5 text-light bg-secondary">
        <Row>
          <Col className="col-xl">
            <h5>Starview</h5>
          </Col>

          <Col className="fs-3 text-end mx-4 ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaWhatsapp />
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
                to={ROUTES.TEAM}
                className="link-light link-underline link-underline-opacity-0 "
              >
                Nuestro equipo
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={ROUTES.EMAIL}
                className="link-light link-underline link-underline-opacity-0"
              >
                Correo
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={ROUTES.LOCATION}
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
                to={ROUTES.HISTORY}
                className="link-light link-underline link-underline-opacity-0"
              >
                Nuestra historia
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={ROUTES.PHONE}
                className="link-light link-underline link-underline-opacity-0"
              >
                Teléfono
              </Link>
            </p>
          </Col>
          <Col>
            <p className="text text-center">
              <Link
                to={ROUTES.TRAVEL}
                className="link-light link-underline link-underline-opacity-0"
              >
                Viajes
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <p className="text text-center">
              <Link
                to={ROUTES.ACTIVITIES}
                className="link-light link-underline link-underline-opacity-0"
              >
                Actividades
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
