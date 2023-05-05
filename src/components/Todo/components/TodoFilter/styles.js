import styled from 'styled-components';

export const TodoFilterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 0.7rem;
  display: flex;

  input {
    margin-top: auto;
    height: 2rem;
    border-radius: 0;
    border-top-left-radius: 5px;
  }

  button {
    border-radius: 0;
    height: 2rem;
    padding: 5px;
    background: var(--primary);

    &:not(:last-child) {
      border-right: 1px solid var(--background);
    }

    &:first-child {
      border-top-left-radius: 12px;
    }
    
    &:last-child {
      border-bottom-right-radius: 12px;
    }

    &.active {
      background: var(--pink);
    }
    img {
      width: 1.8rem;
    }
  }
`