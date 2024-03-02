import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: AxiosError<any> | null;
}

type FetchConfig<T> = {
  url: string;
  method: HttpMethod;
  requestBody?: any;
  responseCallback?: SetDataFunction<T>;
};

type SetDataFunction<T> = (data: T | null) => void;

export function useFetch<T = any>({
  url,
  method = "GET",
  requestBody,
  responseCallback,
}: FetchConfig<T>): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        let response: AxiosResponse<T>;
        switch (method) {
          case "GET":
            response = await axios.get(url);
            break;
          case "POST":
            response = await axios.post(url, requestBody);
            break;
          case "PUT":
            response = await axios.put(url, requestBody);
            break;
          case "PATCH":
            response = await axios.patch(url, requestBody);
            break;
          case "DELETE":
            response = await axios.delete(url);
            break;
          default:
            throw new Error(`Unsupported HTTP method: ${method}`);
        }

        if (responseCallback) {
          responseCallback(response.data);
        } else {
          setData(JSON.parse(response.data as string));
        }
      } catch (err: any) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component is unmounted or the URL changes
    return () => {
      // Cancel the request
    };
  }, [url, method, requestBody, responseCallback]);

  return { data, isLoading, isError };
}
