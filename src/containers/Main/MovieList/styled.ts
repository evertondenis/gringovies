import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, metrics } from 'core/assets/styles'

export const WrapperActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Button = styled.a`
  color: ${colors.whiteMedium};
  text-decoration: none;
  font-size: ${metrics.fontSizeDefault};
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      fill: ${colors.secondary};
    }
  }

  &:first-child {
    padding-right: ${metrics.basePadding};
  }

  &.column {
    align-items: center;
    color: ${colors.secondary};
    display: flex;
    flex-direction: row;

    p {
      font-size: 12px;
      color: ${colors.white};
    }
  }
`

export const ContainerListMovies = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ContainerActions = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`

export const BackButton = styled(Link)`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  align-self: flex-start;

  svg {
    fill: ${colors.black};
    transition: all 0.3s ease;

    &:hover {
      fill: ${colors.secondary};
    }
  }
`
