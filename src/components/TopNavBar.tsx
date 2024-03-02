import { IoIosCodeWorking } from "react-icons/io";
import styled from "styled-components";
import { Stack } from "../theme/common.style";
import { CustomButton } from "./CustomButton";
import { useAuth } from "../context/AuthContext";

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

export const TopNavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <NavBar>
      <Stack>
        <LogoIcon size="2.5rem" />
        <Logo>Job Portal</Logo>
      </Stack>
      <ButtonGroup>
        {isAuthenticated ? (
          <CustomButton label="Logout" onClick={logout} />
        ) : (
          <CustomButton
            label="Login"
            onClick={() => console.log("Login in clicked!!")}
          />
        )}
      </ButtonGroup>
    </NavBar>
  );
};
