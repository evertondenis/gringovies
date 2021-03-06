import styled, { css } from 'styled-components'

import { colors } from 'core/assets/styles'

const getStyles = ({
  alignItems = 'stretch',
  direction = 'row',
  flex = '0 1 auto',
  height = '100%',
  justify = 'flex-start',
  minHeight = '100%',
  overflow = 'visible',
  padding = '0',
  width = 'auto',
  margin = '0',
  position = 'relative'
}) => css`
  align-items: ${alignItems};
  background: ${colors.white};
  flex: ${flex};
  flex-direction: ${direction};
  height: ${height};
  justify-content: ${justify};
  margin: ${margin};
  min-height: ${minHeight};
  overflow: ${overflow};
  padding: ${padding};
  position: ${position};
  width: ${width};
`

const Section = styled.section`
  display: flex;

  ${getStyles}
`

export default Section
