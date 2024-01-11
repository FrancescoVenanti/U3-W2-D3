//-------------- key: e9b4ccd8
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e9b4ccd8

import { Component, useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = (props) => {
	/* state = {
    movies: [],
  }; */
	const [movies, setMovies] = useState([]);

	const filmFetch = async () => {
		try {
			const url = `http://www.omdbapi.com/?s=${props.searchValue}&apikey=e9b4ccd8`;
			const pippo = await fetch(url);
			if (!pippo.ok) {
				throw new Error(`errore${pippo.status}`);
			}
			const dati = await pippo.json();
			const myFilm = dati.Search.slice(0, 6);
			setMovies(myFilm);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		filmFetch();
	}, [movies]);

	return (
		<div className="dark-background">
			<h5 className="my-4 text-light text-start ms-2">{props.title}</h5>
			<Row className="g-1 text-light">
				{movies.map((movie) => (
					<Col className="hover-zoom" lg="2" xs={6} md={4} key={movie.imdbID}>
						<Link to={`/detail/${movie.imdbID}`}>
							<div>
								<img
									src={movie.Poster}
									alt={movie.Title}
									className="img-fluid"
									style={{ width: "400px", height: "200px", objectFit: "cover" }}
								/>
							</div>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};
export default Gallery;
