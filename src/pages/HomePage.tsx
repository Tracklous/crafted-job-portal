import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  color:  ${({ theme }) => theme.palette.textSecondary};;
`;

export const HomePage = () => {
  const [jobs, setJobs] = useState<string>("");
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

  return <Box>{"This is HomePage:".concat(jobs)}</Box>;
};
