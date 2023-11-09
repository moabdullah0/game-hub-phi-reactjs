import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/umages-url";
interface Props {
  onselectedgenre: (genre: Genre) => void;
}
const GenreList = ({ onselectedgenre }: Props) => {
  const { data, isLoading } = useData<Genre>("/genres");
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List>
        {data.map((gener) => (
          <ListItem key={gener.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(gener.image_background)}
              />
              <Button
                onClick={() => onselectedgenre(gener)}
                fontSize={"lg"}
                variant={"link"}
              >
                {gener.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
