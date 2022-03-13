import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  div {
    &.title {
      width: 220px;
      height: 40px;
      margin: 0.5rem 0 1.5rem;
    }
    &.p {
      margin: 0.2rem 0;
      height: 18px;
      width: 100%;
      &:nth-child(2) {
        width: 190px;
        height: 20px;
        margin: 0.4rem 0;
      }
      &:nth-child(3) {
        width: 160px;
        height: 20px;
        margin: 0.4rem 0;
      }
      &:nth-child(4) {
        width: 230px;
        height: 20px;
        margin: 0.4rem 0;
      }
      &:nth-child(9) {
        width: 50%;
      }
    }
  }
`;
