import { useEffect, useState } from "react";
import http from "../network/http";

export const useFetchHTTP = <T>(query: string, initialData: T) => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:4000/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await http.get(`${url}/${query}`);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("an expected loader occured");
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
