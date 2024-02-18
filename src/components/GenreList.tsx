import { HStack, Img, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
	const { data } = useGenres();
	return (
		<List>
			{data.map(genre => (
				<ListItem key={genre.id} marginY='12px'>
					<HStack>
						<Img
							boxSize='32px'
							borderRadius='8px'
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
