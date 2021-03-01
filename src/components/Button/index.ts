import styled, { css } from 'styled-components'
import { colors, metrics } from 'core/assets/styles'

const Button = styled.button`
  background-color: ${colors.secondary};
  padding: 0.5rem 2rem;
  color: ${colors.white};
  border: none;
  cursor: pointer;
  border-radius: ${metrics.baseRadius};
  font-size: ${metrics.fontSizeSM};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #b2b2b2;
      cursor: initial;
      &:hover {
        background-color: #b2b2b2;
      }
    `};
`

export default Button
