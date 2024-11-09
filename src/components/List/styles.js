import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: 80px;

  border: 1px solid white;
  border-radius: 20px;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
