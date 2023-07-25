import axios from "axios";
import { baseAPI } from "../api/data.api";
import { useState, useEffect } from "react";

export function useGet(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    setController(cancelTokenSource);
    setLoading(true);
    baseAPI
      .get(url, { cancelToken: cancelTokenSource.token })
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    return () => cancelTokenSource.cancel();
  }, [url]);

  const cancel = () => (controller ? controller.cancel() : null);
  return { data, loading, error, cancel };
}
