import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelcted from "./components/PlatformSelcted";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
// interface Gamequery{
// genre:Genre |null;
// platform:Platform |null
// }
function App() {
  // const [gamequery,setgamequery]=useState<Gamequery>({} as Gamequery)
  const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedgenre={selectedgenre}
            onSelectedGenre={(genre) => setselectedgenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5}>
        <PlatformSelcted
          selectPlatform={selectedPlatform}
          selectedPlatform={(platform) => setselectedPlatform(platform)}
        />
        <SortSelector/>
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedgenre={selectedgenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
