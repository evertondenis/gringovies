import { FC, InputHTMLAttributes, Ref } from 'react'
import { Wrapper } from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  setRef?: Ref<HTMLInputElement>
}

const Input: FC<InputProps> = ({ setRef, name, label, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input ref={setRef} id={name} {...rest}></input>
    </>
  )
}

export default Input
