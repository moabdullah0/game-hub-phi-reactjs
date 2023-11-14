import { Gamequery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gamequery:Gamequery
) =>
  useData<Game>(
    "/games",
    { params: {
       genres: gamequery.genre?.id, 
       platforms: gamequery.platform?.id,
      ordering:gamequery.sortOrder
      } },
    [gamequery]
  );

export default useGames;
