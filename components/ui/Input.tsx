interface inputProps {
  name: string
  type: string
  placeholder?: string
  value?: string
}
const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}
export default Input