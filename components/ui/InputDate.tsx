interface inputProps {
    name: string
    type: string
    placeholder?: string
    value?: string
    onChange?: any
  }
  const InputDate = ({name, type, placeholder, value, onChange}: inputProps) => {
    return (
      <>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </>
    )
  }
  export default InputDate