import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import star_night from "/images/sky_night.jpeg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import video from "/videos/presentation.mp4";

export const Index = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={star_night} className="main-cover__image" />
        <h1 className="main-cover__title text fs-1 mx-0">STARVIEW</h1>
        <h2 className="main-cover__subtitle mx-0">Visita las estrellas</h2>
        <p className="main-cover__text mx-0">
          <Link
            className="link-underline link-underline-opacity-0 link link-light"
            to={"#start"}
          >
            Leer más <br /> <FaChevronDown />
          </Link>
        </p>
      </Container>
      <Content first>
        <h2 className="fs-2 text text-center">Sobre nosotros</h2>

        <Container className="d-flex flex-wrap flex-lg-nowrap ">
          <Container className="ratio ratio-1x1 w-100 flex-grow-1 my-3 p-0 mx-0">
            <video controls>
              <source src={video} type="video/mp4" />
              Video no soportado
            </video>
          </Container>
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
