import styled from 'styled-components'
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
