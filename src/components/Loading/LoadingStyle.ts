import styled from "@emotion/styled";


export const Spinner = styled.div`
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #17a2b8; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  margin: auto 0;

`;