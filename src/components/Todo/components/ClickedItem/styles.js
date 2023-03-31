import styled from "styled-components";

export const ClickedItemWrapper = styled.section`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-bottom-right-radius: 10px;
  background-image: ${props => props ? `url(${props.backdrop})` : 'none'};
  background-position: center;
  background-size: cover;
  width: calc(100% - 50px);
  z-index: 1;

  &:before {
    content: "";
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000a;
    border-bottom-right-radius: 10px;
  }
  
  > div.content {
    height: 16.4rem;
    overflow-y: auto;
    position: relative;
    color: var(--white);
    padding: 0.2rem;
    border-radius: 1rem;


    h1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.1rem;
    }

    h2 {
      font-size: 0.9rem;
    }

    > div.overview {
      display: flex;
      margin-top: 0.1rem;

      img {
        width: 5rem;
        height: 7.5rem;
        border-radius: 5px;
        border: 1px solid var(--background);
        margin-right: 0.5rem;
      }
      
      p {
        max-height: 7.5rem;
        overflow-y: auto;
        font-size: 0.7rem;
      }
    }

    footer {
      display: flex;
      div.genres {        
        width: 5rem;
        margin-right: 0.5rem;
        display: flex;
        max-height: 6rem;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
  
        span {
          margin-top: 0.25rem;
          width: 100%;
          color: var(--primary);
          padding: 0.2rem 0rem;
          font-size: 0.75rem;
          background-color: var(--background);
        }

      }
      div.addArea {
        display: flex;
        flex: 1;
        flex-direction: column;

        span {
          margin: 0.5rem 0;
          display: flex;
          width: 100%;

          img {
            width: 2rem;
            margin-right: 0.5rem;
          }

          select {
            width: 100%;
          }
        }

        > button {
          width: 100%;
          text-align: center;
          margin-top: auto;
          background-color: var(--pink);
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          width: 100%;
        }
      }
    }

  }
`