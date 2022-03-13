import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  a {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    &:hover {
      border-color: #999;
      background-color: #f1f1f1;
    }
    h2 {
      margin: 0;
    }
    .read-more {
      margin-top: 0.5rem;
    }
  }
`;
