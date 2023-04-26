import styled from "styled-components"
import { fadeAnimation } from '../../../Defaults';

export const HeaderWrapper = styled.form`
  height: 2.2rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  background-color: var(--primary);
  border-top-right-radius: 12px;
  position: relative;
  border-bottom: 2px solid var(--primary);

  input {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > button {
    background-color: var(--pink);
    padding: 0 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const SearchResponse = styled.div`
  padding: 0.5rem;
  background-color: var(--primary);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow-y: auto;
  z-index: 1;
  
  span {
    color: var(--background);
    text-align: center;
  }

  div.resultWrapper {
    position: relative;
    display: flex;
    div {
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
      
      img {
        border-radius: 5px;
        width: 3.5rem;
        height: 5.2rem;
        display: flex;
        cursor: pointer;
        border: 1px solid var(--background);
        transition: 0.5s;
  
        &:hover {
          border-color: var(--pink);
        }
      }
    }
  }

  label.hoveredItem {
    position: fixed;
    border: 2px solid var(--background);
    margin-right: 10px;
    bottom: 10px;
    background-color: var(--primary);
    padding: 0.25rem;
    border-radius: 5px;
    color: var(--background);
    animation: ${fadeAnimation} 0.3s ease-in-out;
    z-index: 2;
  }
`

export const BooksHeaderWrapper = styled(HeaderWrapper)`
  h1 {
    color: var(--background);
  }
  button {
    margin-left: auto;
    border-radius: 0.25rem;
    font-size: 1.5rem;
  }
`

export const NewBook = styled.section`
  padding: ${props => props.opened ? '0.5rem' : 0};
  background-color: var(--primary);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  height: ${props => props.opened ? '200px' : 0};
  z-index: 1;
  transition: 0.3s;
  overflow-y: hidden;

  div {
    display: flex;
    flex-direction: column;
  
    &.left {
      margin-right: 0.5rem;
      
      img {
        border: 2px solid var(--pink);
        min-width: 6rem;
        max-width: 6rem;
        max-height: 9rem;
        text-align: center;
        border-radius: 0.5rem;
      }

      span.coverInvalid {
        border: 2px solid var(--pink);
        min-width: 6rem;
        max-width: 6rem;
        height: 9rem;
        max-height: 9rem;
        text-align: center;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--background);
        font-weight: bold;
      }

      select {
        margin-top: auto;
        height: 1.75rem;
      }
    }
  }

  div > label {
    font-weight: bold;
    color: var(--background);
    input {
      margin-bottom: 0.25rem;
      border-radius: 0.3rem;
    }
  }

  span {
    display: flex;
    margin-top: auto;
  }

  button {
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
    background: var(--pink);
  }
  
`