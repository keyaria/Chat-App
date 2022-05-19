import styled from "@emotion/styled";


export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`
export const Menu = styled.ul`
  padding: 0;
  list-style-type: none;
  li{   
    position: relative;
    width: 100%;
    padding: 10px 1rem;
    cursor: pointer;
    border-bottom: 1px solid #f0f4f8;
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

`