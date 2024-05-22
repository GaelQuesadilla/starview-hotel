import { Container } from "react-bootstrap";

export const BasicCardGroup = (props) => {
  return (
    <>
      <Container className=" mx-0 container-md">{props.children}</Container>
    </>
  );
};
