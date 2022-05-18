import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primaryColor};
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 3px;
  
`;
export const LeftBarSelector = styled.div`
  background: gray;
  grid-area: 1 / 1 / 12 / 2;
`;
export const MainArea = styled.div`
  display: grid;
  grid-area: 1 / 2 / 12 / 6;
`;

export const MessegeArea = styled.div`
  grid-area: 2 / 1 / 10 / 6;
  background: gray;
`;

export const HeaderArea = styled.div`
  grid-area: 1 / 1 / 3 / 6;
  background: black;
`;