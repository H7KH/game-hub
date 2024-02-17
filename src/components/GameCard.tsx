import { Card, CardBody, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';

interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card borderRadius={8} overflow={'hidden'}>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
