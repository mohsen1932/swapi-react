import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    &.avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 1rem auto;
    }
    &.p {
      margin: 0.3rem 0;
      height: 18px;
      width: 80px;
      &:nth-child(2) {
        width: 120px;
      }
    }
  }
`;
