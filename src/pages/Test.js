import { Component } from "react";
import Button from "react-bootstrap/Button";
import CustomLogin from "@/Components/Login/CustomLogin";

export default class Test extends Component {
  constructor(props) {
    super(props); // es como llamar al constuctor de Component
    this.state = { avatarURL: "", nickname: "", age: "" };
  }

  render() {
    return (
      <>
        <Button variant="flat" size="xxl">
          Hello from bootstrat
        </Button>

        <CustomLogin />
      </>
    );
  }
}
