import styled from 'styled-components';

export const TodoFilterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--primary);
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 0.7rem;
  display: flex;

  button {
    border-radius: 0;
    height: auto;
    padding: 5px;

    &:not(:last-child) {
      border-right: 1px solid var(--background);
    }

    &:first-child {
      border-top-left-radius: 1rem;
    }
    
    &:last-child {
      border-bottom-right-radius: 1rem;
    }

    &.active {
      background: var(--pink);
    }
    img {
      width: 1.8rem;
    }
  }
`