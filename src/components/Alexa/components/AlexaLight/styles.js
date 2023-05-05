import styled from "styled-components";

export const AlexaLightWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  button {
    border-radius: 1rem;
    border: 1px solid var(--background);
    margin: 0.15rem;
    margin-top: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      border-color: var(--primary);
    }
  }
`