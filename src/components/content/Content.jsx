import { Container } from "react-bootstrap";

export const Content = (props) => {
  return (
    <>
      <Container>
        <Container
          id={props.first ? "start" : ""}
          className="mx-0 text-bg-dark p-4 container-sm rounded rounded-1 my-3"
        >
          <Container>{props.children}</Container>
        </Container>
      </Container>
    </>
  );
};
