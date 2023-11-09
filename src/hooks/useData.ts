import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchResponse<T>>(endpoint);
        setData(res.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const controller = new AbortController();
    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]); 

  return { data, error, isLoading };
};

export default useData;
