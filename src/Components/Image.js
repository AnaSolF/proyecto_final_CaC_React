import Image from "react-bootstrap/Image";

function Image(props) {
  return (
    <Image src={props.src} whidht={props.whidht} height={props.height} fluid />
  );
}
