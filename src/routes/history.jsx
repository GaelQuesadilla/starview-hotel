import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Content } from "../components/content/Content";
import * as ROUTES from "./routes.js";
import activities from "/images/senderismo.jpg";

export const History = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 text-light">
        <Image src={activities} className="main-cover__image" />

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
      <Content first></Content>
    </>
  );
};
