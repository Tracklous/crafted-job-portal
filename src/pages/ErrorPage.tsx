import { useRouteError } from "react-router-dom";
import { Container, FlexBox } from "../theme/common.style";
import styled from "styled-components";

const ExtendedErrorBox = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <ExtendedErrorBox $display="flex" $flex={1}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* @ts-ignore : There are no types defined in the lib. */}
          <i>{error.statusText || error.message}</i>
        </p>
      </ExtendedErrorBox>
    </Container>
  );
};
