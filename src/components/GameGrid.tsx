import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Games {
	id: number;
	name: string;
}

interface FetchGamesData {
	count: number;
	results: Games[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Games[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		apiClient
			.get<FetchGamesData>('/xgames')
			.then(res => setGames(res.data.results))
			.catch(err => setError(err.message));
	});

	return (
		<>
			{error && <text>{error}</text>}
			<ul>
				{games.map(game => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
