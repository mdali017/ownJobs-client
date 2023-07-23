import { useEffect, useState } from "react";

const useAllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2000/alljobs")
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setLoading(false);
      });
  }, []);
  return [allJobs, loading];
};
export default useAllJobs;
