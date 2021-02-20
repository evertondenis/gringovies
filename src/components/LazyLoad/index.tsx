import { useRef } from 'react'
import LazyLoad from 'react-lazyload'

import { ImageWrapper, Placeholder, StyledImage } from './styled'

interface LazyProps {
  src: string
  alt: string
}

const LazyImage = ({ src, alt }: LazyProps) => {
  const refPlaceholder = useRef<HTMLDivElement>(null)

  const removePlaceholder = () => {
    if (refPlaceholder && refPlaceholder.current) {
      refPlaceholder.current.remove()
    }
  }

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  )
}

export default LazyImage
