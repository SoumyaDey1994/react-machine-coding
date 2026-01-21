import { React, useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const query = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          setError(res.error);
          return;
        }

        const data = await res.json();

        if (isMounted) {
          setData(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error || { message: "Something went wrong" });
        }
      } finally {
        setIsLoading(false);
      }
    };

    query();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { isLoading, data, error };
};
