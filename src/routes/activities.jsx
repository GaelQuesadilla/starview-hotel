import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import * as ROUTES from "./routes.js";
import activities from "/images/senderismo.jpg";

export const Activities = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={activities} className="main-cover__image" />

        <div className="m-0 p-0 main-cover__content">
          <h1 className="text fs-1 mx-0 my-2">STARVIEW</h1>
          <h2 className="mx-0 my-2">DIVIERTETE EN LAS ESTRELLAS</h2>
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
        <h2 className="fs-2 text text-center">
          Actividades Deportivas en Starview Hotel
        </h2>

        <p>
          En Starview Hotel, no solo ofrecemos un refugio de lujo y tranquilidad
          en medio de la naturaleza, sino también una amplia variedad de
          actividades deportivas diseñadas para satisfacer a los amantes del
          ejercicio y la aventura. Nuestro objetivo es proporcionar a nuestros
          huéspedes una experiencia completa, combinando la relajación con la
          actividad física en un entorno espectacular.
        </p>

        <h3>Gimnasio Ecológico</h3>
        <p>
          Nuestro gimnasio ecológico es un espacio único, construido con
          materiales sostenibles y locales, como madera y otros recursos
          naturales. Equipado con máquinas y pesas hechas artesanalmente, este
          gimnasio no solo te permitirá mantener tu rutina de ejercicios, sino
          también conectarte con el entorno natural mientras lo haces. Disfruta
          de tus entrenamientos rodeado de la flora local, respirando aire puro
          y sintiendo la energía de la naturaleza.
        </p>
        <h3>Senderismo y Caminatas Guiadas</h3>
        <p>
          Explora los alrededores vírgenes de Los Cabos con nuestras rutas de
          senderismo y caminatas guiadas. Tenemos senderos de diferentes niveles
          de dificultad que te llevarán a través de paisajes impresionantes,
          desde montañas hasta costas vírgenes. Nuestros guías expertos te
          acompañarán, proporcionando información sobre la flora y fauna local,
          así como datos interesantes sobre la historia y cultura de la región.
        </p>
        <h3>Actividades Acuáticas</h3>
        <p>
          Disfruta de nuestra área común de piscina, diseñada para ofrecer un
          espacio relajante y al mismo tiempo perfecto para nadar. Además,
          organizamos actividades como aeróbic acuático y natación libre para
          quienes deseen ejercitarse en el agua. La piscina, rodeada de
          vegetación autóctona, ofrece una vista espectacular mientras disfrutas
          del agua cristalina.
        </p>
        <h3>Yoga y Meditación</h3>
        <p>
          Participa en nuestras sesiones de yoga y meditación, que se llevan a
          cabo en un entorno tranquilo y natural. Nuestros instructores
          certificados te guiarán a través de clases diseñadas para todos los
          niveles, desde principiantes hasta avanzados. Estas actividades no
          solo te ayudarán a mejorar tu flexibilidad y fuerza, sino que también
          proporcionarán una profunda sensación de paz y bienestar,
          permitiéndote desconectar del estrés diario.
        </p>
        <h2>Observación de la Fauna y Flora Silvestre</h2>
        <p>
          Para los amantes de la naturaleza, organizamos excursiones de
          observación de fauna y flora silvestre. Estas actividades te
          permitirán conocer más sobre las especies autóctonas que habitan en
          nuestro entorno. Equipado con binoculares y cámaras, podrás captar
          momentos únicos de la vida silvestre mientras aprendes sobre la
          biodiversidad de Los Cabos.
        </p>
        <h3>Excursiones de Ciclismo</h3>
        <p>
          Descubre la belleza de Los Cabos sobre dos ruedas con nuestras
          excursiones de ciclismo. Disponemos de bicicletas de montaña y rutas
          que te llevarán a través de paisajes diversos, desde senderos costeros
          hasta caminos montañosos. Estas excursiones son una excelente manera
          de ejercitarse y explorar el entorno natural de una manera activa y
          emocionante.
        </p>
      </Content>
    </>
  );
};
