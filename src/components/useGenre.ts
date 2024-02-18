import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
	id: number
	name:string
}

interface FetchGenresData {
	count: number;
	results: Genres[];
}

const useGenres = () => {

	const [genres, setGenres] = useState<Genres[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		const controller = new AbortController();

		setLoading(true);

			apiClient
				.get<FetchGenresData>('/genres', {signal: controller.signal})
				.then(res => {
					setGenres(res.data.results)
					setLoading(false);
				})
				.catch(err => {
					if(err instanceof CanceledError) return;
					setError(err.message)
					setLoading(false);
				});

				return () => controller.abort()
		}, []);

		return {genres, error, loading}
	}

	export default useGenres
