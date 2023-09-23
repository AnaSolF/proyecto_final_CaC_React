import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Nav } from "react-bootstrap";

export default function CardsComercios(props) {
  
  return (
    <>
     <Nav.Link href={props.href}>
      <Card
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          }}
      >
          <Card.Img src={props.src} width="20px" height="50px"  />
        </Card>
        </Nav.Link>
    </>
  );
}
