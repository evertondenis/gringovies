import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: visible;
  }
`

export const Content = styled.div`
  width: 50%;
  background-color: #222c30;
  border-radius: 4px;
`

export const Header = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Body = styled.div`
  padding: 0.4rem;
`

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    fill: #fff;
  }
`
