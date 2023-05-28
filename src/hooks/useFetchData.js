import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (
      async () => {
        try {
          setLoading(true);
          const response = await axios.get(url);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
