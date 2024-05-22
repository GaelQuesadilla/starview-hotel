import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BasicCard = (props) => {
  return (
    <>
      <Card className="my-3">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-primary">
          <small className="text-light text">
            <Link
              to={"#"}
              className=" link link-underline link-underline-opacity-0 link-light"
            >
              Leer más
            </Link>
          </small>
        </Card.Footer>
      </Card>
    </>
  );
};
