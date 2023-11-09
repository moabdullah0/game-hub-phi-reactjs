import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string , requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller=new AbortController()
        setLoading(true);
        const res = await apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig});
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
  },deps?[...deps]:[]); 

  return { data, error, isLoading };
};

export default useData;
