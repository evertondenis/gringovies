import { FC, InputHTMLAttributes, Ref } from 'react'

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
