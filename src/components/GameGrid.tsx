import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genres } from '../hooks/useGenre';

interface Props {
	selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data, error, loading } = useGames(selectedGenre);

	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	return (
		<>
			{error && <text>{error}</text>}
			<SimpleGrid padding='10px' spacing={4} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
				{loading &&
					skeleton.map(skeleton => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
