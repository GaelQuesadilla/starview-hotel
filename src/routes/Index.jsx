import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import star_night from "/images/sky_night.jpeg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import video from "/videos/presentation.mp4";
import senderismo from "/images/senderismo.jpg";
import arco from "/images/arcocsl.jpg";
import { BasicCardGroup } from "../components/cardgroup/BasicCardGroup";
import { BasicCard } from "../components/cardgroup/BasicCard";
import telescopio from "/images/telescopio.jpg";
import * as ROUTES from "./routes.js";

import bubbleHotel from "/images/bubble.jpg";

export const Index = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={star_night} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">Visita las estrellas</h2>
          <p className="mx-0 my-2">
            <a
              className="link-underline link-underline-opacity-0 link link-light"
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

      <Content>
        <BasicCardGroup>
          <BasicCard
            title="Nuestros hoteles"
            img={bubbleHotel}
            to={ROUTES.LOCATION}
          >
            Ofrecemos un servicio de hospedaje de primera clase con
            instalaciones únicas, como burbujas de techo transparente para
            observación de estrellas
          </BasicCard>
          <BasicCard
            title="Nuestra historia"
            img={telescopio}
            to={ROUTES.HISTORY}
          >
            Starview Hotel nació del espíritu emprendedor de seis visionarios
            estudiantes de Baja California Sur. Un eco-hotel de lujo en Los
            Cabos, donde la naturaleza y la sostenibilidad se unen
          </BasicCard>
          <BasicCard
            title="Actividades"
            img={senderismo}
            to={ROUTES.ACTIVITIES}
          >
            Disfruta de actividades deportivas únicas en Starview Hotel:
            gimnasio ecológico, senderismo, yoga, natación y ciclismo, todo en
            la naturaleza.
          </BasicCard>
          <BasicCard title="Nuestra ubicación" img={arco} to={ROUTES.LOCATION}>
            Disfruta de un entorno virgen, ideal para la observación de
            estrellas y la conexión con la naturaleza a solo 10 minutos de San
            José del Cabo.
          </BasicCard>
        </BasicCardGroup>
      </Content>
    </>
  );
};
