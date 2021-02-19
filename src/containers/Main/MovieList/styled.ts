import styled from 'styled-components'

export const WrapperActions = styled.div`
  display: flex;
  justify-content: flex-start
  align-items: center;
`

export const Button = styled.a`
  color: rgb(250, 250, 250);
  text-decoration: none;
  font-size: 12px;

  &:first-child {
    padding-right: 10px;
  }

  &.column {
    align-items: center;
    color: #ff424f;
    display: flex;
    flex-direction: row;

    p {
      font-size: 12px;
      color: #fff;
    }
  }
`
