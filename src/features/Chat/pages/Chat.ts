import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1140px;
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

export const MessageArea = styled.div`
  grid-area: 2 / 1 / 10 / 6;
  background: gray;
`;

export const HeaderArea = styled.div`
  grid-area: 1 / 1 / 3 / 6;
  padding: 0 15px;
  min-height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e6ecf3;
  -webkit-border-radius: 0 3px 0 0;
  -moz-border-radius: 0 3px 0 0;
  border-radius: 0 3px 0 0;
`;

export const ChatContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;



  li {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  width: 100%;
  }
`

export const ChatAvatar = styled.div`
  margin-right: 20px;

  img {
    width: 48px;
    height: 48px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
  p {
    font-size: .75rem;
    color: #999999;
    text-align: center;
    margin: 0;
  }
`

export const ChatText = styled.div`
    padding: 0.4rem 1rem;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: #ffffff;
    font-weight: 300;
    line-height: 150%;
    position: relative;
    '&:before':{
      content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 10px;
    left: -20px;
    border: 10px solid;
    border-color: transparent #ffffff transparent transparent;
    }
`