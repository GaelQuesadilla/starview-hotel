import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import * as ROUTES from "./routes.js";
import about_us from "/images/about_us.jpg";
import bubbleHotel from "/images/bubble.jpg";

export const AboutUs = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-dark">
        <Image src={about_us} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">Visita las estrellas</h2>
          <p className="mx-0 my-2">
            <a
              className="link-underline link-underline-opacity-0 link link-dark"
              href={"#start"}
            >
              Leer más <br /> <FaChevronDown />
            </a>
          </p>
        </div>
      </Container>
      <Content first>
        <h2 className="fs-2 text text-center">Conoce nuestro hotel</h2>

        <Container className="d-flex flex-wrap flex-lg-nowrap ">
          <Container className=" mx-sm-0 mx-md-4 p-2">
            <p className="text">
              ¿Te imaginas pasar unas noches con una buena compañía, en medio de
              la naturaleza y poder observar las estrellas mientras estás
              tumbado en la cama? En Starview Hotel buscamos que nuestros
              huéspedes puedan disfrutar de una hermosa estancia, así como poder
              pasar la noche en nuestras habitaciones en forma de biomas, este
              con el propósito de poder ver las estrellas desde la comodidad de
              la cama y disfrutar una linda noche.
            </p>
          </Container>
        </Container>
      </Content>
    </>
  );
};
