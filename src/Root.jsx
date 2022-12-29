import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Root = () => {
  return (
    <Container>
      <Navbar expand="sm" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <h1 className="logo">
              My Tasks
            </h1>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#">Create</Nav.Link>
            <Nav.Link href="#">
              <Button variant="primary">
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Root;
