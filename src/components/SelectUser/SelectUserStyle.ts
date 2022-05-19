import styled from "@emotion/styled";

//TODO: Make display block down a global stype for forms
export const Select = styled.select`
  position: relative;
display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
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


export const Title = styled.label`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const DIV = styled.div`
  margin-bottom: 1rem;
`;

