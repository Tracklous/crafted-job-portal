import axios from "axios";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [jobs, setJobs] = useState<string>('');
  function getJobs() {
    axios
      .get("/api/jobs")
      .then((res) => {
        console.log(">>>", res.data);
        setJobs(res.data[0].job);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return <div>{"This is HomePage:".concat(jobs)}</div>;
};
