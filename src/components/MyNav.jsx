import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LogoNetflix from "../assets/logo.png";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function MyNav() {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={LogoNetflix} width="100" height="60" className="d-inline-block align-top" alt="Netflix logo" />
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/tvshow">
							Tv Shows
						</Link>
						<Link className="nav-link" to="/movies">
							Movies
						</Link>
						<Link className="nav-link" to="/recenti">
							Aggiunti di recente
						</Link>
						<Link className="nav-link" to="/preferiti">
							Preferiti
						</Link>
					</Nav>
					<Nav>
						<Nav.Link className="me-2" href="#">
							<Search />
						</Nav.Link>
						<Nav.Link className="me-2" href="#">
							KIDS
						</Nav.Link>
						<Nav.Link className="me-2" href="#">
							<Bell />
						</Nav.Link>
						<Nav.Link className="me-2" href="#">
							<PersonCircle />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
