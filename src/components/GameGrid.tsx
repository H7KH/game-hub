import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
	const { games, error, loading } = useGames();

	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<>
			{error && <text>{error}</text>}
			<SimpleGrid padding='10px' spacing={8} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
				{loading &&
					skeleton.map(skeleton => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map(game => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
