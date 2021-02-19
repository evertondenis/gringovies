import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input } from 'components'

export const StyledHeader = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Wrapper = styled.div`
  align-items: center;
  color: rgb(250, 250, 250);
  display: flex;
  padding: 0 4%;
  width: 100%;
`

export const LinkItem = styled(Link)`
  color: rgb(250, 250, 250);
  text-decoration: none;

  &:last-child {
    padding-left: 10px;
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

export const WrapperSearch = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: flex-end;
  padding: 0 5px;
  position: relative;
  width: 100%;
`

export const StyledInput = styled(Input)`
  background: none;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  outline: none;
  padding-right: 60px;
  padding: 3px;
  position: absolute;
  right: 4px;
  transition: all 0.4s cubic-bezier(0, 0.795, 0, 1);
  opacity: 0;
  width: 25px;
  z-index: 3;

  &:focus {
    opacity: 1;
    cursor: text;
    width: 60%;
    z-index: 1;

    &:before {
      content: '';
    }
  }
`
