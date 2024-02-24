import {
  Column,
  Container,
  FlexBox,
  LabelContainer,
} from "../theme/common.style";
import { IoLocationOutline, IoLogoGithub } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import {
  DefaultIcon,
  ExtendedColumn,
  ProfilePictureContainer,
  ProfilePictureImage,
  UseBioText,
  UserDetailsText,
  UserNameText,
} from "./UserProfile.styles";
import styled from "styled-components";
import { InputField } from "../components/InputField";
import { FC, useState } from "react";

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
  if (isLinked) return null;

  const [username, setUsername] = useState("");
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <>
      <GithubLinkingLabel>
        Looks like you haven't linked your GitHub profile yet. Please use the
        input below to link your profile:
      </GithubLinkingLabel>
      <div>
        <InputField
          width="50%"
          icon={<IoLogoGithub />}
          type="search"
          placeholder="Type your GitHub username..."
          value={username}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export const UserProfile = () => {
  const userImagePath = "";

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
        <UserNameText>@{userDetails.userName}</UserNameText>
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
        <LinkGithubProfile isLinked={userDetails.isGithubLinked} />
        {userDetails.isGithubLinked && (
          <SectionTitle>Github repositories</SectionTitle>
        )}
      </Column>
    </Container>
  );
};
