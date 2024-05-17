interface inputProps {
    name: string
    placeholder?: string
    value?: string
    rows?: number
  }
  const Textarea = ({name, placeholder, value, rows}: inputProps) => {
    return (
      <>
        <textarea
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            name={name}
            value={value}
            placeholder={placeholder}
            rows={rows}
        />
      </>
    )
  }
  export default Textarea