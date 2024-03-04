import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import styled from "styled-components";
import { LinkGithubProfile } from "../../components/GithubLinking";
import { useAuth } from "../../context/AuthContext";
import { useFetchMutation } from "../../hooks/useFetch";
import { GITHUB_PROFILE_API_URL } from "../../services/endpoints";
import {
  Column,
  Container,
  FlexBox,
  LabelContainer,
  ListContainer,
} from "../../theme/common.style";
import {
  DefaultIcon,
  ExtendedColumn,
  ProfilePictureContainer,
  ProfilePictureImage,
  UseBioText,
  UserDetailsText,
  UserNameText,
} from "./UserProfile.styles";
import { CardDescription, CardTitle } from "../jobs/JobList.styles";
import { usePagination } from "../../hooks/usePagination";
import { PAGINATION_PAGE_SIZE } from "../../constants/App.config";
import { PaginationFooter } from "../../components/PaginationFooter";

const ColumnTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.palette.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const RepoListCard: React.FC<{ username: string }> = ({ username }) => {
  const {
    mutate: getUserRepos,
    isLoading,
    data,
  } = useFetchMutation({
    url: GITHUB_PROFILE_API_URL(username),
    method: "GET",
  });
  //Todo : Add types for git data
  const { paginatedData, currentPage, nextPage, prevPage } = usePagination<any>(
    data || [],
    {
      initialPageSize: PAGINATION_PAGE_SIZE,
    }
  );

  useEffect(() => {
    getUserRepos();
  }, []);

  return (
    <>
      <SectionTitle>Github repositories</SectionTitle>
      {isLoading && (
        <h6 style={{ marginTop: "15px" }}>Loading repositories...</h6>
      )}
      {!isLoading && (
        <ListContainer>
          {/* TODO : Add types for git data */}
          {paginatedData?.map((repo: any) => {
            return (
              <li key={repo.id}>
                <FlexBox $flex="1">
                  <CardTitle>{repo.name}</CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                </FlexBox>
              </li>
            );
          })}
          <PaginationFooter
            totalPages={paginatedData.length / PAGINATION_PAGE_SIZE}
            currentPage={currentPage}
            onNextPage={nextPage}
            onPrevPage={prevPage}
          />
        </ListContainer>
      )}
    </>
  );
};

export const UserProfilePage = () => {
  const { user, updateCurrentUserTrigger } = useAuth();
  const userImagePath = "";
  const gitUsername = user?.github.username;

  useEffect(() => {
    updateCurrentUserTrigger();
  }, []);

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

        <UserDetailsText>{user?.name}</UserDetailsText>
        {gitUsername && <UserNameText>@{gitUsername}</UserNameText>}
        <UseBioText>{user?.bio}</UseBioText>
        <FlexBox $display="flex" $flex="0 0 0%" $gap={15}>
          <LabelContainer>
            <IoLocationOutline />
            {user?.country}
          </LabelContainer>
          <LabelContainer>
            <LiaCitySolid />
            {user?.location}
          </LabelContainer>
        </FlexBox>
      </ExtendedColumn>
      <Column $spaceRatio={3}>
        <ColumnTitle>Profile section</ColumnTitle>
        <LinkGithubProfile isLinked={!!user?.github.isLinked} />
        {user?.github.isLinked && user.github.username && (
          <RepoListCard username={user.github.username} />
        )}
      </Column>
    </Container>
  );
};
