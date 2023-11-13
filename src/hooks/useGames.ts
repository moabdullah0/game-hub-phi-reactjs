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
  selectedgenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedgenre?.id, platforms: selectedPlatform?.id } },
    [selectedgenre?.id, selectedPlatform?.id]
  );

export default useGames;
