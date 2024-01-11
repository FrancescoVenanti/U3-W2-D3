import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import Myfooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MyNav />
				<TopBar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Gallery searchValue="show" title="Tv-Show" />
								<Gallery searchValue="Devil" title="Movies" />
								<Gallery searchValue="Iron man" title="Aggiunti di recente" />
								<Gallery searchValue="Rocco" title="Preferiti" />
							</>
						}
					></Route>
					<Route path="/tvshow" element={<Gallery searchValue="show" title="Tv-Show" />} />
					<Route path="Movies" element={<Gallery searchValue="Devil" title="Movies" />} />
					<Route path="Recenti" element={<Gallery searchValue="Iron man" title="Aggiunti di recente" />} />
					<Route path="Preferiti" element={<Gallery searchValue="Rocco" title="Preferiti" />} />
					<Route path="/detail/:movieId" element={<MovieDetails />} />
				</Routes>
				<Myfooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
