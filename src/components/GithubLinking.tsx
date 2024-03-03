import { FC, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import styled from "styled-components";
import { InputField } from "../components/InputField";
import { useAuth } from "../context/AuthContext";
import { useFetchMutation } from "../hooks/useFetch";
import { GITHUB_PROFILE_API_URL } from "../services/endpoints";
import { FlexBox } from "../theme/common.style";

const GithubLinkingLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.palette.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const LinkGithubProfile: FC<{ isLinked: boolean }> = ({ isLinked }) => {
  const { updateCurrentUserTrigger } = useAuth();
  const [username, setUsername] = useState("");
  const { mutate: getUserRepos, isLoading } = useFetchMutation({
    url: GITHUB_PROFILE_API_URL(username),
    method: "GET",
  });
  const { mutate: persistLinking } = useFetchMutation({
    url: "api/link-github",
  });
  if (isLinked) return null;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleGithubLinking() {
    getUserRepos({}, () => {
      persistLinking({ gitUsername: username }, updateCurrentUserTrigger);
    });
  }

  return (
    <>
      <GithubLinkingLabel>
        Looks like you haven't linked your GitHub profile yet. Please use the
        input below to link your profile:
      </GithubLinkingLabel>
      <FlexBox $display="flex" $gap={10}>
        <InputField
          disabled={isLoading}
          width="50%"
          icon={<IoLogoGithub />}
          type="search"
          placeholder="Type your GitHub username..."
          value={username}
          onChange={handleInputChange}
        />
        <button disabled={isLoading} onClick={handleGithubLinking}>
          {isLoading ? "Linking" : "Link"}
        </button>
      </FlexBox>
    </>
  );
};
