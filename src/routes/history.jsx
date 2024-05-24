import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import * as ROUTES from "./routes.js";
import history from "/images/historia.jpg";

export const History = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={history} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">LA HISTORIA DE LAS ESTRELLAS</h2>
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
        <h1>La Historia de Starview Hotel: Un Sueño Convertido en Realidad</h1>
        <p>
          Hace años, seis jóvenes emprendedores, estudiantes del Colegio de
          Bachilleres del Estado de Baja California Sur, se unieron con una
          visión audaz: crear un refugio único en Los Cabos, donde la naturaleza
          y el lujo se fusionaran para ofrecer una experiencia inolvidable.
          Estos visionarios fundadores, Escobedo Castro Mackenzie Yoryeth,
          Garcia Lopez Athenea Michelle, Hernandez Gonzalez Tonathiu Bladimir,
          Lopez Garcia Luis Martin, Ortega Guajardo Eredmy Guadalupe y Santos
          Arratia Melissa Pamela, compartían una pasión por el turismo y la
          sostenibilidad, y estaban decididos a hacer realidad su sueño.
        </p>
        <p>
          Con determinación y dedicación, estos jóvenes se embarcaron en un
          viaje que los llevó desde las aulas hasta los terrenos vírgenes de Los
          Cabos. A través de incansables horas de planificación, investigación y
          trabajo arduo, dieron vida a Starview Hotel, un eco-hotel que refleja
          su compromiso con el medio ambiente y su visión de ofrecer
          experiencias únicas a los viajeros de todo el mundo.
        </p>
        <p>
          Hoy, Starview Hotel es mucho más que un simple destino turístico: es
          un testimonio del poder del espíritu emprendedor y la pasión por hacer
          una diferencia en el mundo. La historia de estos fundadores inspira a
          otros a seguir sus sueños, a perseguir la grandeza y a crear un
          impacto positivo en sus comunidades y en el mundo en general.
        </p>
        <p>
          Desde sus humildes comienzos como estudiantes universitarios hasta
          convertirse en líderes empresariales en la industria del turismo,
          Escobedo, Athenea, Tonathiu, Luis, Eredmy y Melissa han demostrado que
          con determinación, trabajo duro y una visión clara, cualquier sueño
          puede hacerse realidad. Su legado perdurará en Starview Hotel, un
          oasis de belleza, lujo y sostenibilidad en el corazón de Los Cabos.
        </p>
      </Content>
    </>
  );
};
