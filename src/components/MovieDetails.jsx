import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MovieDetails = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Container>
						<Row className=" justify-content-center">
							<Col xs={6}>
								<Card className="bg-black text-center">
									<Card.Img
										variant="top"
										src={data.Poster}
										style={{
											width: "100%",
											height: "600px",
											objectFit: "contain",
										}}
									/>
									<Card.Body>
										<Card.Title className=" fw-bold fs-1">{data.Title}</Card.Title>
										<Card.Text>{data.Plot}</Card.Text>
										<Button variant="outline-light">Watch Now</Button>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default MovieDetails;
