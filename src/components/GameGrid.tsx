import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <text>{error}</text>}
			<SimpleGrid padding='10px' spacing={8} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
