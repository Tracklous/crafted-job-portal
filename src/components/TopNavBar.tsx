import { IoIosCodeWorking } from "react-icons/io";
import styled from "styled-components";
import { Stack } from "../theme/common.style";
import { CustomButton } from "./CustomButton";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  height: 55px;
  background-color: ${({ theme }) => theme.palette.commonWhite};
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0px ${theme.spacing.xxl}`};
  justify-content: space-between;
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.palette.secondary};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
`;

const LogoIcon = styled(IoIosCodeWorking)`
  color: ${({ theme }) => theme.palette.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const NavLinksContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  list-style: none;
  text-decoration: none;
  margin-right: 4rem;
`;

const NavLinks = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;

  return (
    <NavLinksContainer>
      <li>
        <Link to="/">Jobs List</Link>
      </li>
      <Link to="/applied-jobs">Applied Jobs</Link>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/post-job">Post Jobs</Link>
      </li>
      <li>
        <Link to="/posted-jobs">Posted Jobs</Link>
      </li>
    </NavLinksContainer>
  );
};

export const TopNavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <NavBar>
      <Stack>
        <LogoIcon size="2.5rem" />
        <Logo>Job Portal</Logo>
      </Stack>
      <NavLinks />
      <ButtonGroup>
        {isAuthenticated && <CustomButton label="Logout" onClick={logout} />}
      </ButtonGroup>
    </NavBar>
  );
};
