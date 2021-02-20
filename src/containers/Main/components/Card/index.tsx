import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { LazyImage } from 'components'

import {
  Average,
  ContainerImage,
  Descriptions,
  Title,
  StyledCard
} from './styled'

interface Props {
  children?: React.ReactNode
  img: string
  title: string
  link: string
  average: string
}

const Card: FC<Props> = ({ children, img, title, link, average }) => (
  <StyledCard>
    <ContainerImage>
      <Link to={link}>
        <LazyImage src={img} alt={title} />
      </Link>
    </ContainerImage>
    <Descriptions className="description">
      <Title>
        <p>{title}</p>
      </Title>
      {children}
    </Descriptions>
    <Average>{average}</Average>
  </StyledCard>
)

export default Card
