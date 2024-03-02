import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

type ReadHttpMethod = "GET";
type WriteHttpMethods = "POST" | "PUT" | "PATCH" | "DELETE";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  isError: AxiosError<any> | null;
};

type FetchConfig<T> = {
  url: string;
  method?: ReadHttpMethod;
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
        let response: AxiosResponse<T> = await axios.get(url);
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
      // Todo cancel the request
    };
  }, [url, method, requestBody, responseCallback]);

  return { data, isLoading, isError };
}

type FetchMutationState<T> = {
  data: T | null;
  isLoading: boolean;
  isError: AxiosError<any> | null;
  mutate: (requestBody?: any, cb?: (..._: any) => void) => void;
};

type FetchMutationConfig = {
  url: string;
  method?: WriteHttpMethods;
  options?: AxiosRequestConfig;
};

export function useFetchMutation<T = any>({
  url,
  method = "POST",
  options,
}: FetchMutationConfig): FetchMutationState<T> {
  let data: T | null = null;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<AxiosError<any> | null>(null);

  const mutate = async (requestBody?: any, cb?: (..._: any) => void) => {
    setIsLoading(true);
    setIsError(null);
    try {
      let response: AxiosResponse<T>;
      switch (method) {
        case "POST":
          response = await axios.post(url, requestBody, options);
          break;
        case "PUT":
          response = await axios.put(url, requestBody, options);
          break;
        case "PATCH":
          response = await axios.patch(url, requestBody, options);
          break;
        case "DELETE":
          response = await axios.delete(url, options);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
      data = response.data;
      if (cb) cb(response.data);
      return response.data;
    } catch (err: any) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, mutate };
}
