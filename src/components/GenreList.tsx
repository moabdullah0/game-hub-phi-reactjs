import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/umages-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void; // Updated the naming convention to camelCase
  selectedgenre: Genre | null; // Updated the naming convention to camelCase
}

const GenreList = ({ onSelectedGenre, selectedgenre }: Props) => {
  const { data, isLoading } = useData<Genre>("/genres");

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedgenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)} // Updated the naming convention to camelCase
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
