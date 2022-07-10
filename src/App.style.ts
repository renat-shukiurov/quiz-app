import styled, {createGlobalStyle} from "styled-components";
import BGImage from './images/bg.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
      height: 100%;
    }
    
    body {
      background-image: url(${BGImage});
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
    
    * {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > p {
    color: #fff;
  }
  
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  
  h1 {
    background-image: linear-gradient(180deg, #fff, #9192f7);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -mos-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 40px;
    text-align: center;
    margin: 20px;
  }
  
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #9192f7);
    border: 1px solid #6162d5;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
  .start {
    max-width: 200px;
  }
`