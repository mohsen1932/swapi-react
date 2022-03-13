import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 990px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
