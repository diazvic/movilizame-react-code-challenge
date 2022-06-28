// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

import { useState, useEffect } from "react";
import {
	apiKey,
	urlBase,
	queryParamLenguaje,
	queryParamPagina,
} from "../utils/Variables";
const useFetchMovies = (titulo) => {
	const [arrayPeliculas, setArrayPeliculas] = useState([]);

	// aca crear el estado
	// y use effect para llamar a la api
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${titulo}?api_key=${apiKey}&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setArrayPeliculas(data);
			});
	}, []);

	return {
		peliculas: arrayPeliculas,
	};
};

export default useFetchMovies;
