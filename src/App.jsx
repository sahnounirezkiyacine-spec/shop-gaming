import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

// 👉 mets ton prénom ici
const firstName = "Yacine";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card
        style={{ width: "22rem" }}
        className="shadow-lg text-center"
      >
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-4">
        Salut, {firstName ? firstName : "there !"}
      </h3>

      {firstName && (
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar"
          style={{ width: "80px", marginTop: "10px" }}
        />
      )}
    </Container>
  );
}

export default App;
