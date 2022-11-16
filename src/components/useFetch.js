// import { useState, useEffect } from "react";

const useFetch = (url) => {
  //   const [data, setData] = useState(null);
  //   const [aparts, setAparts] = useState(null);
  //   const [error, setError] = useState(null);
  //   useEffect(() => {
  //     const abortCont = new AbortController();
  //     fetch(url)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("could not fetch the data for that resource");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //       });
  //     return () => abortCont.abort;
  //   }, [url]);
  //   return { data, aparts, error };
};

export default useFetch;
