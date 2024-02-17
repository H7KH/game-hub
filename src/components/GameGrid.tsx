import useGames from '../hooks/useGames';

const GameGrid = () => {
	const { games, error } = useGames();

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
