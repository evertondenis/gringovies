import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input } from 'components'

import { colors, metrics } from 'core/assets/styles'

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${colors.black};
  display: flex;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Wrapper = styled.div`
  align-items: center;
  color: ${colors.white};
  display: flex;
  padding: 0 ${metrics.paddingPerc};
  width: 100%;
`

export const LinkItem = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-size: ${metrics.fontSizeDefault};
  transition: all 0.3s ease;

  &:hover {
    svg {
      fill: ${colors.white};
    }
  }

  svg {
    transition: all 0.3s ease;
    fill: ${colors.secondary};
  }

  &:last-child {
    padding-left: 10px;
  }

  &.column {
    align-items: center;
    color: {
      ${colors.secondary}
    }
    display: flex;
    flex-direction: row;

    p {
      font-size: 12px;
      color: ${colors.white};
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
  border: 1px solid ${colors.white};
  border-radius: 4px;
  color: ${colors.white};
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
