import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content.jsx";
import * as ROUTES from "./routes.js";
import hotel from "/images/bubble_hotel.jpg";

export const Location = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={hotel} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">UBICA LAS ESTRELLAS</h2>
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
        <h2>Ubicación de Starview Hotel</h2>
        <h3>Descubre el Paraíso en Los Cabos</h3>
        <p>
          Starview Hotel se encuentra en una ubicación privilegiada, diseñada
          para ofrecer una experiencia inolvidable de lujo y naturaleza en Los
          Cabos, Baja California Sur. Nuestro eco-hotel se sitúa a solo 14
          kilómetros del Aeropuerto Internacional de San José del Cabo, lo que
          permite un acceso rápido y conveniente para nuestros huéspedes.
        </p>
        <h2>Un Refugio en la Naturaleza</h2>
        <p>
          Ubicado en un área prácticamente virgen del municipio de Los Cabos,
          Starview Hotel se erige en un entorno natural espectacular, libre de
          la contaminación lumínica y el ruido de la ciudad. Nuestra ubicación
          estratégica permite a los huéspedes disfrutar de un cielo nocturno
          despejado, perfecto para la observación de estrellas y constelaciones,
          así como de una flora y fauna silvestre exuberante.
        </p>
        <h2>Cercanía y Conveniencia</h2>

        <p>
          A solo 10 minutos en coche de San José del Cabo, nuestro hotel combina
          la tranquilidad de un retiro natural con la conveniencia de estar
          cerca de los principales puntos de acceso y servicios de la ciudad.
          Esto hace de Starview Hotel el lugar ideal tanto para aquellos que
          buscan una escapada relajante como para quienes desean explorar las
          atracciones y actividades de Los Cabos.
        </p>

        <h2>Un Vínculo con la Naturaleza</h2>
        <p>
          El terreno de cinco hectáreas donde se encuentra Starview Hotel ofrece
          un acceso privilegiado a la Sierra de la Laguna y la presa La Palma,
          dos lugares icónicos de la región. Estos sitios no solo son perfectos
          para actividades al aire libre como senderismo y ciclismo, sino que
          también brindan una oportunidad única para experimentar la diversidad
          climática y la riqueza natural de Baja California Sur.
        </p>
        <h3>Alta Plusvalía y Desarrollo</h3>
        <p>
          La zona en la que nos ubicamos está en plena expansión, con
          desarrolladores hoteleros y de viviendas invirtiendo en sus
          alrededores. Esto asegura una alta plusvalía y un desarrollo continuo,
          garantizando que nuestros huéspedes disfruten de instalaciones de
          primer nivel y servicios mejorados constantemente.
        </p>

        <h2>Cómo Llegar</h2>
        <p>
          Desde el Aeropuerto Internacional de San José del Cabo, Starview Hotel
          está a un corto trayecto en coche, facilitando tu llegada para que
          puedas comenzar tu experiencia de inmediato. Ofrecemos servicio de
          transporte desde y hacia el aeropuerto para mayor comodidad. Además,
          nuestra ubicación permite un fácil acceso a las principales
          carreteras, conectándote rápidamente con las playas paradisíacas y
          otras atracciones de Los Cabos.
        </p>
        <h2>Dirección</h2>
        <p>
          Starview Hotel
          <br />
          San José del Cabo, Los Cabos, B.C.S., México
          <br />
        </p>

        <h3>Ven y Vive la Experiencia Starview</h3>
        <p>
          En Starview Hotel, cada detalle de nuestra ubicación ha sido
          cuidadosamente elegido para brindarte lo mejor de ambos mundos: la
          serenidad y belleza de la naturaleza junto con la cercanía y
          accesibilidad a los servicios urbanos. Ven y descubre por qué Starview
          Hotel es el destino perfecto para tu próxima escapada. ¡Te esperamos!
        </p>
      </Content>
    </>
  );
};
