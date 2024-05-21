import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import star_night from "/images/star_night.jpg";
import { Content } from "../components/content/Content";

export const Index = () => {
  return (
    <>
      <Container className="main-cover p-0 m-0 ">
        <Image src={star_night} className="main-cover__image" />
      </Container>
    </>
  );
};
