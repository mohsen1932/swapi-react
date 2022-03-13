import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  div {
    &.title {
      width: 180px;
      height: 30px;
      margin: 0.2rem 0 0.3rem;
    }
    &.p {
      margin: 0.17rem 0;
      height: 18px;
      width: 140px;
      &:nth-child(2) {
        width: 170px;
      }
      &:nth-child(4) {
        width: 220px;
      }
    }
    &.read-more {
      margin-top: 0.35rem;
      height: 18px;
      width: 120px;
    }
  }
`;
