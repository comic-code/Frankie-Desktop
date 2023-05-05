import styled from "styled-components";

export const ListItemsWrapper = styled.ul`
  margin: 0.5rem 0;
  width: 100%;
  padding: 0.5rem;
  height: calc(100vh - 4px - 1rem - 2.2rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ItemWrapper = styled.li`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.editing ? '#fff4' : 'var(--background)'};

  &:not(:last-child) {
    border-bottom: 1px solid var(--purple);
  }

  > div {
    display: flex;
    flex-direction: column;
     
    div.row {
      display: flex;
      align-items: center;

      img {
        width: 1.9rem;
        transition: 0.2s;
        margin-right: 5px;
        &:hover {
          filter: ${props => props.editing ? 'brightness(1.1)' : 'none'};
        }
      }
      span.rating {
        border-left: 2px solid var(--purple);
        padding-left: 0.25rem;;
      }

      select {
        height: 100%;
        font-size: 1rem;
      }
    }

    > span {
      margin-bottom: 0.25rem;
      
    }
  }

  img {
    width: 3.5rem;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
  color: #fff;
  
  button {
    margin-left: 1rem;
    background-color: var(--pink);
    padding: 0 0.5rem
  }
`