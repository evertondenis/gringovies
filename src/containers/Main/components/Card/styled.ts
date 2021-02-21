import styled from 'styled-components'
import { colors, metrics } from 'core/assets/styles'

export const StyledCard = styled.div`
  margin: 10px 5px;
  transition: all 0.3s ease;
  width: 200px;
  height: 300px;
  background-color: ${colors.whiteMedium};
  position: relative;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  .description {
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1;

    .description {
      opacity: 1;
    }

    img {
      transform: scale(1.2);
      opacity: 0.75;
    }
  }
`

export const ContainerImage = styled.div`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  height: 300px;
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    transition: all 0.5s ease;
    width: 100%;
  }
`

export const Descriptions = styled.div`
  border-radius: ${metrics.baseRadius};
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  bottom: 0;
  position: absolute;
  background-color: ${colors.primary};
  padding: 6px 6px 10px;

  color: ${colors.white};
`

export const Title = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 0 ${metrics.basePadding};
  width: 100%;

  p {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 600;
  }
`

export const Average = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;

  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: ${colors.black};
  font-size: 12px;
  font-weight: ${metrics.baseFontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`
