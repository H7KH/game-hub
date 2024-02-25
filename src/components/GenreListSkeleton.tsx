import { List, ListItem, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
	return (
		<List>
			<ListItem marginY='12px'>
				<SkeletonText noOfLines={1} skeletonHeight='32px' />
			</ListItem>
		</List>
	);
};

export default GenreListSkeleton;
