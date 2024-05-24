import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import * as ROUTES from "./routes.js";
import team from "/images/team.png";

export const Team = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={team} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">CONOCE NUESTRAS ESTRELLAS</h2>
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
        <h1>Miembros fundadores</h1>

        <ul>
          <li>Escobedo Castro Mackenzie Yoryeth</li>
          <li>Garcia Lopez Athenea Michelle</li>
          <li>Hernandez Gonzalez Tonathiu Bladimir</li>
          <li>Lopez Garcia Luis Martin</li>
          <li>Ortega Guajardo Eredmy Guadalupe</li>
          <li>Santos Arratia Melissa Pamela</li>
        </ul>
        <h2>Funciones:</h2>

        <h3>Escobedo Castro Mackenzie Yoryeth</h3>
        <h4>Gerente General</h4>
        <p>
          Mackenzie es responsable de supervisar y coordinar todas las
          operaciones y actividades dentro del Starview Hotel, asegurando una
          experiencia positiva tanto para los huéspedes como para el personal.
          Además, se encarga de la toma de decisiones estratégicas y la
          maximización de la rentabilidad del establecimiento.
        </p>
        <h3>Garcia Lopez Athenea Michelle</h3>
        <h4>Directora de Habitaciones</h4>
        <p>
          Athenea gestiona todas las actividades relacionadas con las
          habitaciones del hotel. Su labor incluye la optimización de
          habitaciones, el control de calidad y la capacitación del personal de
          limpieza para garantizar que cada habitación cumpla con los altos
          estándares de Starview Hotel.
        </p>

        <h3>Hernandez Gonzalez Tonathiu Bladimir</h3>
        <h4>Director de Alimentos y Bebidas</h4>
        <p>
          Tonathiu desarrolla y gestiona el menú de alimentos y bebidas,
          asegurando que el servicio cumpla con las expectativas de los
          huéspedes. Es responsable de la compra de suministros y la gestión del
          personal del restaurante, incluyendo camareros, baristas y chefs.
        </p>
        <h3>Lopez Garcia Luis Martin</h3>
        <h4>Director de Recursos Humanos</h4>
        <p>
          Luis se encarga de la gestión del talento humano, desde el
          reclutamiento y la capacitación hasta la retención de empleados
          competentes y comprometidos. Además, garantiza el cumplimiento de
          todas las leyes y regulaciones laborales aplicables.
        </p>

        <h3>Ortega Guajardo Eredmy Guadalupe</h3>
        <h4>Directora de Ventas y Mercadeo</h4>
        <p>
          Eredmy es responsable de generar ingresos mediante la promoción y
          venta de las instalaciones y servicios del hotel. Desarrolla
          estrategias para aumentar las ventas de habitaciones y servicios
          adicionales, y realiza análisis de mercado para identificar tendencias
          y demandas del consumidor.
        </p>

        <h3>Santos Arratia Melissa Pamela</h3>
        <h4>Directora de Mantenimiento y Seguridad</h4>
        <p>
          Melissa supervisa el mantenimiento de todas las instalaciones físicas
          del hotel, asegurando que estén en óptimas condiciones. Además, dirige
          el equipo de seguridad, garantizando un ambiente seguro y tranquilo
          para todos los huéspedes y empleados del Starview Hotel.
        </p>
        <p>
          Cada miembro del equipo fundador de Starview Hotel aporta una
          combinación única de habilidades y experiencia, lo que nos permite
          ofrecer una experiencia de hospedaje excepcional y sostenible en el
          hermoso destino de Los Cabos.
        </p>
      </Content>
    </>
  );
};
