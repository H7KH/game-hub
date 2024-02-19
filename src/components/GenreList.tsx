import { Button, HStack, Img, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
	onSelectedGenre: (genre: Genres) => void;
	selectedGenre: Genres | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
						<Button
							fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
							onClick={() => onSelectedGenre(genre)}
							variant='link'
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
