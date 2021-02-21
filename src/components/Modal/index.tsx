import { Close } from '@styled-icons/evil/Close'
import { Body, Content, CloseButton, Header, Wrapper } from './styled'

interface Props {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ show, onClose, children }: Props) => {
  if (!show) {
    return null
  }

  return (
    <Wrapper className={`${show ? 'show' : ''}`} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseButton onClick={onClose}>
            <Close size={22} />
          </CloseButton>
        </Header>
        <Body>{children}</Body>
      </Content>
    </Wrapper>
  )
}

export default Modal
