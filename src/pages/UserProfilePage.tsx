import { FC, useState } from "react";
import { IoLocationOutline, IoLogoGithub } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import styled from "styled-components";
import { InputField } from "../components/InputField";
import { useAuth } from "../context/AuthContext";
import { useFetchMutation } from "../hooks/useFetch";
import { GITHUB_PROFILE_API_URL } from "../services/endpoints";
import {
  Column,
  Container,
  FlexBox,
  LabelContainer,
} from "../theme/common.style";
import {
  DefaultIcon,
  ExtendedColumn,
  ProfilePictureContainer,
  ProfilePictureImage,
  UseBioText,
  UserDetailsText,
  UserNameText,
} from "./UserProfile.styles";

const userDetails = {
  name: "Ankit Khudania",
  bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
  est minima esse illo incidunt maxime. Reiciendis aliquam cupiditate
  perspiciatis voluptatem autem repellat molestiae, accusantium,
  maxime vitae voluptate voluptates mollitia sunt!`,
  userName: "username",
  location: "Hyderabad",
  country: "India",
  isGithubLinked: false,
  githubUsername: "tracklous",
};

const ColumnTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.palette.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const GithubLinkingLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.palette.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LinkGithubProfile: FC<{ isLinked: boolean }> = ({ isLinked }) => {
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

export const UserProfilePage = () => {
  const { user } = useAuth();
  const userImagePath = "";
  const gitUsername = user?.github.username;

  return (
    <Container>
      <ExtendedColumn $spaceRatio={1}>
        <ProfilePictureContainer>
          {userImagePath ? (
            <ProfilePictureImage src={userImagePath} alt="Profile" />
          ) : (
            <DefaultIcon size={80} />
          )}
        </ProfilePictureContainer>

        <UserDetailsText>{userDetails.name}</UserDetailsText>
        {gitUsername && <UserNameText>@{gitUsername}</UserNameText>}
        <UseBioText>{userDetails.bio}</UseBioText>
        <FlexBox $display="flex" $flex="0 0 0%" $gap={15}>
          <LabelContainer>
            <IoLocationOutline />
            {userDetails.country}
          </LabelContainer>
          <LabelContainer>
            <LiaCitySolid />
            {userDetails.location}
          </LabelContainer>
        </FlexBox>
      </ExtendedColumn>
      <Column $spaceRatio={3}>
        <ColumnTitle>Profile section</ColumnTitle>
        <LinkGithubProfile isLinked={!!user?.github.isLinked} />
        {user?.github.isLinked && (
          <SectionTitle>Github repositories</SectionTitle>
        )}
      </Column>
    </Container>
  );
};
