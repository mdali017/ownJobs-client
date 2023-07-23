import { useEffect, useState } from "react";

const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2000/allcompanies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      });
  }, []);
  return [companies, loading];
};

export default useCompanies;
