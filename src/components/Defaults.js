import styled, { keyframes } from "styled-components";

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const DefaultContainer = styled.section`
  background-color: #0008;
  backdrop-filter: blur(53px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid var(--primary);
  animation: ${fadeAnimation} 0.2s ease-in-out;
`