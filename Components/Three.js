import { Container, Row } from "react-bootstrap";
import BoxChoices from "./Threejs/BoxChoices";


function ThreeJs() {


  return (
    <div className="Threejs">
      <Container >
      <Row>
          <h1 className="boxbaslik" >
             Şekil Rengi Değiştirme </h1>
        </Row>
        <Row >
          <BoxChoices/>
        </Row>
      </Container>

    </div>
  );
}

export default ThreeJs;