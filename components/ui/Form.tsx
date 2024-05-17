"use client"
import { useRef, ReactNode } from "react"


interface formProps {
  children: ReactNode
  className?: string
  action: (formData: FormData) => Promise < void | boolean >
  onSubmit?: () => void
}


const Form = ({children, className, action, onSubmit}: formProps) => {

  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={ async (formData) => {
        await action(formData)
        ref.current?.reset()
      }}
    >
      {children}
    </form>
  )
}
export default Form