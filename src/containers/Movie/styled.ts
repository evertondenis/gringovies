import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, metrics } from 'core/assets/styles'

interface Props {
  image: string
}

export const Container = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: ${metrics.basePadding} ${metrics.paddingPerc};
  grid-template-columns: 250px auto 300px;
  column-gap: ${metrics.baseMarginSM};

  p {
    color: ${colors.white};
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: ${metrics.fontSizeL};
  color: ${colors.white};
`

export const SubTitle = styled.h2`
  font-size: ${metrics.fontSizeDefault};
  color: ${colors.white};
`

export const Certification = styled.div`
  background: transparent;
  border: 1px solid ${colors.whiteMedium};
  border-radius: ${metrics.baseRadius};
  padding: 2px 4px;

  p {
    font-size: 0.8rem;
  }
`

export const Tags = styled.ul`
  display: inline;
  list-style: none;
  font-size: ${metrics.fontSizeDefault};
  margin: ${metrics.baseMarginSM} 0;
`

export const TagItem = styled.li`
  height: 25px;
  display: inline-block;
  color: ${colors.white};
  font-size: ${metrics.fontSizeSM};

  &:not(:last-child) {
    padding-right: ${metrics.baseMarginSM};
    margin-right: ${metrics.basePadding};
    border-right: 1px solid ${colors.whiteMedium};
  }
`

export const Genres = styled.p`
  color: ${colors.white};
  font-size: ${metrics.fontSizeSM};
`

export const Overview = styled.div`
  padding: ${metrics.basePadding} 0;

  p {
    color: ${colors.white};
    font-size: ${metrics.fontSizeDefault};
  }
`

export const Wrapper = styled.div<Props>`
  background-image: url(${({ image }) => image});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${colors.blackMedium};
  }
`

export const WrapperPoster = styled.div`
  width: 250px;
  height: 375px;
  border-radius: ${metrics.baseRadius};
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 42px;
`

export const Casting = styled.div`
  width: 100%;
  word-break: break-word;
  margin-bottom: ${metrics.baseMarginSM};

  span {
    word-break: break-word;
    color: ${colors.white};
    font-size: ${metrics.fontSizeSM};

    &:first-child {
      padding-right: 5px;
      color: ${colors.whiteMedium};
    }
  }
`

export const WrapperSimilar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin: 30px 0 15px 4%;
`

export const ContentSimilar = styled.ol`
  overflow-x: scroll;
  overflow-y: hidden;
  margin-left: -10px;
  margin-top: -10px;
  padding-bottom: 10px;
  list-style-type: none;
  list-style-position: inside;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
`

export const SimilarMovie = styled.li`
  margin: ${metrics.baseMarginSM};
  margin-right: 4px;
  border-radius: ${metrics.baseRadius};
  overflow: hidden;
  min-width: 180px;
  width: 180px;
  height: 270px;
  background-color: ${colors.white};
`

export const BackButton = styled(Link)`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  align-self: flex-start;
  margin-top: ${metrics.baseMarginSM};
  margin-left: ${metrics.paddingPerc};

  svg {
    fill: ${colors.white};
    transition: all 0.3s ease;

    &:hover {
      fill: ${colors.secondary};
    }
  }
`
