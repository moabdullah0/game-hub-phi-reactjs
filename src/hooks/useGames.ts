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
  const [isLoading , setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchGame>("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);

        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
    return (err) => controller.abort();
  }, []);
  return { games, error,isLoading };
};
export default useGames;
