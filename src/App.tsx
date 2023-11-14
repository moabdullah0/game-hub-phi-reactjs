import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelcted from "./components/PlatformSelcted";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import './index.css'
export interface Gamequery {
  sortOrder : string
  genre:Genre |null;
   platform:Platform |null;
   searchText:string;
}
function App() {
   const [gamequery,setgamequery]=useState<Gamequery>({} as Gamequery)
  
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
        <Navbar onSearch={(searchText)=>setgamequery({...gamequery,searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedgenre={gamequery.genre}
            onSelectedGenre={(genre) => setgamequery({...gamequery,genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5}>
        <PlatformSelcted
          selectPlatform={gamequery.platform}
          selectedPlatform={(platform) => setgamequery({...gamequery,platform})}
        />
         <SortSelector sortorder={gamequery.sortOrder} onSelecsortOreder={(sortOrder)=>setgamequery({...gamequery,sortOrder})}/> 
        </HStack>
        <GameGrid
          gamequery={gamequery}
        
        />
      </GridItem>
    </Grid>
  );
}

export default App;
