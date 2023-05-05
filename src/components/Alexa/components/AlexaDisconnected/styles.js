import styled from "styled-components";

export const AlexaDisconnectedWrapper = styled.section`
  height: 3.9rem;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  
  button {
    margin-left: 0.5rem;
    img {
      width: 2.25rem;
    }
  }
`