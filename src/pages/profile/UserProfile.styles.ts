import styled from "styled-components";
import { Column } from "../../theme/common.style";
import { colord } from "colord";
import { IoPersonOutline } from "react-icons/io5";

export const ExtendedColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ProfilePictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
        colord(theme.palette.primary).alpha(0.1).toRgbString()};
`;

export const ProfilePictureImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const DefaultIcon = styled(IoPersonOutline)`
  color: ${({ theme }) =>
        colord(theme.palette.primary).alpha(0.75).toRgbString()};
  width: 75px;
  height: 75px;
`;

export const UserDetailsText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  letter-spacing: 0.2ch;
`;

export const UserNameText = styled.p`
  margin-top: -8px;
  color: ${({ theme }) => theme.palette.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.1ch;
  text-transform: uppercase;
`;

export const UseBioText = styled.p`
  color: ${({ theme }) => theme.palette.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;