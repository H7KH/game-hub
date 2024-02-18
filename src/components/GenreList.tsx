import { HStack, Img, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
	const { data, loading, error } = useGenres();

	if (error) return null;

	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

	return (
		<List>
			{loading && skeleton.map(skeleton => <GenreListSkeleton key={skeleton} />)}
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
