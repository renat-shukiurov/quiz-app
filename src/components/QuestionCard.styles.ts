import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #e4e3ff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.25);
  text-align: center;
  margin-top: 20px;
  
  p {
    font-size: 1rem;
  }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  
  :hover {
    opacity: 0.8;
  }
  
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    
    background: ${ ({ correct, userClicked }) => 
        correct
            ? 'linear-gradient(90deg,#52d7ba,#44ca81)'
            : !correct && userClicked
            ? 'linear-gradient(90deg,#f73e3e,#e05050)'
            : 'linear-gradient(90deg,#78a5b8,#9183a6)'};
        
    border: 1px solid #fff;
    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    color: #fff;
    }
`