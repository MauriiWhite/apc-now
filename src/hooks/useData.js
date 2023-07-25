import { useState, useEffect } from "react";

export function useData(promise) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const result = await promise;
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [promise]);

  return { data, loading };
}
