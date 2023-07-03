import React from "react";
import styles from "../styles/unProducto.module.css";
import Card from "react-bootstrap/Card";

const ItemsDetail = ({ data }) => {
  return data.map((negocio, key) => (
    <div key={negocio.id} className={styles.producto}>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={negocio.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{negocio.nombre}</Card.Title>
          <Card.Text>{negocio.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {negocio.precio}</strong>
          </Card.Text>
          {/* <Link to={`Grido/`}></Link> */}
        </Card.Body>
      </Card>
    </div>
  ));
};

export default ItemsDetail;
