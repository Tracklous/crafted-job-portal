import styled, { keyframes } from "styled-components";

// Keyframe animation for dropdown
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateOut = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const MultiSelectContainer = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
`;

export const WrapperSelectInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: ${({ theme }) => theme.spacing.xxs};

  &:focus-within {
    outline: ${({ theme }) => theme.palette.secondary} auto 1px;
    border-radius: 0;
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: inline-block;
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const SelectInput = styled.input`
  padding: 6px;
  border: none;
  min-width: 200px;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
  z-index: 100;
  animation: ${fadeIn} 0.3s ease;
`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
    background-color: ${({ theme }) => theme.palette.fadedSecondary};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 4px;
  padding: 4px 4px;
  background-color: #f0f0f0;
  position: relative;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const OpenButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  padding: 0px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  cursor: pointer;
  animation: ${({ $isOpen }) => ($isOpen ? rotateIn : rotateOut)} 0.3s forwards;
`;

export const SelectedItemText = styled.span`
  padding: 6px;
  text-transform: capitalize;
`;