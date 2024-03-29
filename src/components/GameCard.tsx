import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Games } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack marginBottom={2} justifyContent='space-between'>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
