import { Card, CardBody, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card borderRadius={8} overflow={'hidden'}>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack justifyContent='space-between'>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
