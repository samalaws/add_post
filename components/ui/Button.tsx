"use client"

import { ReactNode } from "react"

interface buttonProps {
  type?: "button" | "submit" | "reset"
  text: string | ReactNode
  onClick?: () => void
  actionButton?: boolean
}
const Button = ({type, text, onClick, actionButton}: buttonProps) => {
  return (
    <>
      <button
        className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        onClick={onClick}
        type={type}
      >{text}</button>
    </>
  )
}
export default Button