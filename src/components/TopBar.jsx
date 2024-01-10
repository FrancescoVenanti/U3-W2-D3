import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function TopBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="ms-4" href="#">
          TV Shows
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Commedy</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Anime</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="me-4" href="#">
              <Grid />
            </Nav.Link>
            <Nav.Link className="me-4" href="#">
              <Grid3x3 />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
