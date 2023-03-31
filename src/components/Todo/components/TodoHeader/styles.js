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