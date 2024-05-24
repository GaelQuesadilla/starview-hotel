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
          <h2 className="mx-0 my-2">CONOCE LAS ESTRELLAS</h2>
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
        <h1>Sobre nosotros</h1>
        <h2>Bienvenidos a Starview Hotel</h2>
        <p>
          En Starview Hotel, nuestra misión es ofrecer una experiencia de
          hospedaje única y memorable en el corazón de Los Cabos, Baja
          California Sur. Nos enorgullecemos de ser pioneros en la industria del
          turismo sustentable, combinando lujo y confort con un profundo respeto
          por la naturaleza.
        </p>

        <h2>Nuestra historia</h2>

        <p>
          Starview Hotel nace de la visión de un grupo de emprendedores
          apasionados por el ecoturismo y la preservación del medio ambiente.
          Con el propósito de satisfacer la creciente demanda de hospedaje
          sustentable, creamos un refugio que permite a los visitantes
          reconectar con la naturaleza sin renunciar a las comodidades de un
          hotel de primer nivel. Nuestro proyecto, respaldado por la empresa
          TELYMA S.A. de R.L., busca ofrecer una alternativa de hospedaje
          innovadora y respetuosa con el entorno natural.
        </p>

        <h2>Ubicación privilegiada</h2>

        <p>
          Situado a solo 14 kilómetros del Aeropuerto Internacional de San José
          del Cabo, Starview Hotel se encuentra en una zona privilegiada,
          rodeada de la belleza virgen del municipio de Los Cabos. Nuestra
          ubicación estratégica permite a los huéspedes disfrutar de un fácil
          acceso desde el aeropuerto, al mismo tiempo que les brinda la
          oportunidad de sumergirse en un entorno natural libre de contaminación
          lumínica y sonora.
        </p>
        <h2>Nuestra propuesta</h2>
        <p>
          En Starview Hotel, ofrecemos seis exclusivas burbujas ecológicas con
          techos transparentes, diseñadas para brindar una vista inigualable del
          cielo estrellado. Además, contamos con una variedad de instalaciones y
          servicios que incluyen una piscina común, un gimnasio ecológico, áreas
          de descanso y recreación, servicio de transporte desde y hacia el
          aeropuerto, y una exquisita oferta gastronómica. Nuestras burbujas
          están equipadas con camas hipoalergénicas y baños privados, asegurando
          una estancia cómoda y saludable para todos nuestros huéspedes.
        </p>
      </Content>
    </>
  );
};
