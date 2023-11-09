import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface platform { 
id:number
slug:string
name:string
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:platform}[];
  metacritic : number ;
}
interface FetchGame {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGame>("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return (err) => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
