import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <text>{error}</text>}
			<SimpleGrid
				padding='10px'
				spacing={8}
				templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
			>
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
