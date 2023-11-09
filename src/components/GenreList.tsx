import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/umages-url";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <div>
      <List>
        {data.map((gener) => (
          <ListItem key={gener.id} paddingY={'5px'}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(gener.image_background)}
              />
              <Text fontSize={'lg'}>{gener.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
