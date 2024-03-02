import React from "react";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const PaginationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.commonWhite};
`;

const PageButton = styled.button<{ $disabled: boolean }>`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  outline: none;

  &:hover {
    background-color: ${(props) => !props.$disabled && "#e0e0e0"};
  }
`;

const PaginationText = styled.div`
  margin: 0 10px;
`;

export const PaginationFooter: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <PaginationContainer>
      <PageButton
        onClick={onPrevPage}
        disabled={currentPage === 1}
        $disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      <PaginationText>
        Page {currentPage} of {Math.ceil(totalPages)}
      </PaginationText>
      <PageButton
        onClick={onNextPage}
        disabled={currentPage === Math.ceil(totalPages)}
        $disabled={currentPage === Math.ceil(totalPages)}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};
