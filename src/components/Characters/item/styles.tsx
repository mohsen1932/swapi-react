import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fc0;
    margin: 1rem auto;
  }
  h4 {
    margin: 0;
    padding-bottom: 0.5rem;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;
