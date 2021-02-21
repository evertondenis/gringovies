import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  margin: auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #df6c4f;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`

export default Spinner
