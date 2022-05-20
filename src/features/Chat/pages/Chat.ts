import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1140px;
  padding: 15px 0;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primaryColor};
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 3px;
  
`;
export const LeftBarSelector = styled.div`
  grid-area: 1 / 1 / 12 / 5;
  border-right: 1px solid #e6ecf3;
`;
export const MainArea = styled.div`
  display: grid;
  grid-area: 1 / 5 / 12 / 16;
`;

export const MessageArea = styled.div`
  grid-area: 3 / 1 / 10 / 8;
  padding: 1rem;
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
  width: 100%;
  max-height: 650px;
  overflow:auto;

`;

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
`;

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
`;

export const DIV = styled.div`
  height: auto
`;
export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: auto;
  min-height: 300px
  max-height: 400px;
  padding: 0.375rem 0;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const dynamicStyle = (props: { color: any; mat: any; }) => ({ flexDirection: props.color });

export const ChatLeft = styled.div`
  margin-bottom: 1rem;
  flex: 1;
    `;
export const ChatList = styled.li`
${dynamicStyle};
  flex: 1;
  display: flex;
  margin-bottom: 40px;
  width: 100%;
`;

export const Title = styled.div`
  max-width: 1140px;
  padding: 15px;
  margin: 0 auto;

  h5{
    font-size: 1.25rem;
    margin: .2rem 0;
  }

  p{
    margin-top: 0;
  }
`;

export const Date = styled.span`
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  font-size: 0.80rem;
  justify-content: center;
  flex-direction:row;
  align-items: center;
  display: flex;
  text-align: center;

  p {
    font-size: .75rem;
    color: #999999;
    text-align: center;
  }
  FontAwesomeIcon {
    color: green;
  }
  .fa-circle-check {
    color: green
  }
`;
