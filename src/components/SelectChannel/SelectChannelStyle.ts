import styled from "@emotion/styled";

export const Title = styled.label`
  margin-top: 0;
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  li{   
    position: relative;
    width: 100%;
    padding: 10px .1rem;
    cursor: pointer;
    background-image: linear-gradient(right, #f7f9fb, #ffffff);
    border-bottom: 1px solid #f0f4f8;
    &.active {
       background-color: #ffffff;
        background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
    }
    &:hover {
    background-color: #ffffff;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f9fb), to(#ffffff));
    background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);
      }


}

    p{
      font-weight: 600;
      font-size: .85rem;
      display: inline-block;
    }

`;