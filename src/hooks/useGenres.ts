import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
id:number
name:string
}
interface FertchGenre{
count :number
results:Genre[]
}
const useGenre=()=>{
    const [Genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
      apiClient
        .get<FertchGenre>("/games", { signal: controller.signal })
        .then((res) => {
            setGenres(res.data.results);
  
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false)
        });
      return (err) => controller.abort();
    }, []);
    return { Genres, error,isLoading };
}
export default useGenre