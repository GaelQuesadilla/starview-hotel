import { Container } from "react-bootstrap";

export const Content = (props) => {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
};
