import Form from "react-bootstrap/Form";
import React from "react";

export default function MyInput(props) {

  return (
    <>
      <Form className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          width={props.width}
        />
      </Form>
    </>
  );
}
