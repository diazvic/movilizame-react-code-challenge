import useFetchMovies from "../../services/useFetchMovies";
const SearchMovies = () => {
	const titulo = useFetchMovies("popular");
	const handleClickBuscar = () => {};

	return (
		<div>
			<form>
				<label>
					Titulo
					<input type="text"></input>
				</label>
				<label>
					Año hasta:
					<input type="number"></input>
				</label>
			</form>
			<button onClick={handleClickBuscar}>Buscar</button>
		</div>
	);
};
export default SearchMovies;
