import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const { games, error, loading } = useGames();

	const skeleton = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <text>{error}</text>}
			<SimpleGrid padding='10px' spacing={8} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
				{loading && skeleton.map(skeleton => <GameCardSkeleton key={skeleton} />)}
				{games.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
