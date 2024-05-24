import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content.jsx";
import * as ROUTES from "./routes.js";
import viajes from "/images/viajes.jpeg";

export const Travel = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={viajes} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">VIAJA A LAS ESTRELLAS</h2>
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
        <h1>Viajes</h1>
        <h2>Descubre el Encanto de Los Cabos con Starview Hotel</h2>
        <p>
          En Starview Hotel, te invitamos a descubrir la magia de Los Cabos, un
          destino de ensueño que combina playas paradisíacas, una vibrante
          cultura local y un entorno natural incomparable. Nuestra ubicación
          privilegiada en San José del Cabo te coloca en el corazón de este
          impresionante destino, ofreciéndote una base perfecta para explorar y
          disfrutar de todo lo que esta maravillosa región tiene para ofrecer.
        </p>
        <h2>Experiencias Únicas para Todo Tipo de Viajero</h2>
        <p>
          Ya sea que busques una escapada romántica, unas vacaciones familiares
          o una aventura en solitario, Los Cabos tiene algo para todos. Desde
          deportes acuáticos y excursiones al aire libre hasta visitas
          culturales y gastronómicas, cada día en Los Cabos promete una nueva
          experiencia y recuerdos inolvidables.
        </p>

        <h3>Actividades al Aire Libre</h3>
        <ul>
          <li>
            <strong>Snorkel y Buceo</strong>: Descubre la rica vida marina del
            Mar de Cortés. Sumérgete en sus aguas cristalinas y explora
            arrecifes de coral, nado con tiburones ballena y la belleza
            submarina que hace de esta zona una de las mejores para el buceo.
          </li>
          <li>
            <strong>Senderismo y Excursiones</strong>: Explora la Sierra de la
            Laguna y la Presa La Palma, donde podrás disfrutar de paisajes
            impresionantes y una gran diversidad de flora y fauna. Estas rutas
            ofrecen una combinación perfecta de aventura y contacto con la
            naturaleza.
          </li>
          <li>
            <strong>Avistamiento de Ballenas</strong>: De diciembre a abril, Los
            Cabos se convierte en el escenario de uno de los espectáculos más
            impresionantes de la naturaleza: la migración de las ballenas grises
            y jorobadas. Únete a un tour de avistamiento y vive esta experiencia
            única.
          </li>
        </ul>

        <h3>Relax y Bienestar</h3>
        <ul>
          <li>
            <strong>Playas Paradisíacas</strong>: Relájate en algunas de las
            playas más hermosas del mundo, como Playa del Amor y Playa Santa
            María. Disfruta del sol, la arena y el mar en un ambiente de paz y
            tranquilidad.
          </li>
          <li>
            <strong>Spas y Bienestar</strong>: Rejuvenece tu cuerpo y mente con
            tratamientos de spa que combinan técnicas tradicionales y modernas.
            Desde masajes relajantes hasta terapias holísticas, Los Cabos ofrece
            una variedad de opciones para tu bienestar.
          </li>
        </ul>

        <h3>Cultura y Gastronomía</h3>
        <ul>
          <li>
            <strong>Exploración Cultural</strong>: Visita el encantador centro
            histórico de San José del Cabo, conocido por sus galerías de arte,
            boutiques y arquitectura colonial. Participa en eventos culturales y
            festivales locales que te permitirán sumergirte en la cultura
            mexicana.
          </li>
          <li>
            <strong>Gastronomía Local</strong>: Deléitate con la cocina mexicana
            en su máxima expresión. Desde tacos callejeros hasta alta cocina,
            Los Cabos es un paraíso gastronómico. No te pierdas la oportunidad
            de probar mariscos frescos y platillos tradicionales en los mejores
            restaurantes de la región.
          </li>
        </ul>

        <h2>Servicios de Viaje de Starview Hotel</h2>
        <p>
          Para asegurarnos de que tu experiencia de viaje sea perfecta, Starview
          Hotel ofrece una gama de servicios diseñados para tu comodidad y
          disfrute:
        </p>
        <ul>
          <li>
            <strong>Transporte Privado</strong>: Servicio de transporte desde y
            hacia el Aeropuerto Internacional de San José del Cabo, facilitando
            tu llegada y partida.
          </li>
          <li>
            <strong>Tours y Excursiones</strong>: Organizamos una variedad de
            tours y excursiones para que puedas explorar Los Cabos de la mejor
            manera posible.
          </li>
          <li>
            <strong>Asesoría Personalizada</strong>: Nuestro equipo de
            conserjería está disponible para ayudarte a planificar y
            personalizar tu itinerario de viaje, asegurando que aproveches al
            máximo tu estancia.
          </li>
        </ul>

        <h2>Planifica tu Viaje con Nosotros</h2>
        <p>
          Deja que Starview Hotel sea tu puerta de entrada a las maravillas de
          Los Cabos. Con nuestras comodidades de primer nivel y nuestro
          compromiso con el servicio excepcional, te garantizamos una
          experiencia de viaje inolvidable.
        </p>
        <p>
          Reserva tu estancia hoy y prepárate para descubrir la belleza y
          aventura que te esperan en Los Cabos.
        </p>
      </Content>
    </>
  );
};
