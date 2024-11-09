import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;

  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--color-text-principal);
  }

  p {
    color: var(--color-text-description);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  font-size: 16px;
  color: ${({ color }) => color};
`;
