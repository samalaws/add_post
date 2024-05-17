import type React from 'react';

interface dropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label? : string,
    options: any[];
    value?: string;
    customKey?: string;
}

export const Dropdown = (props: dropdownProps) => {
    const {name, label, options, value, onChange, customKey} = props;
    return (
            <select name={name} value={value} onChange={onChange}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
                <option>Select {label}</option>
                {options.map((option) => {
                    if (typeof option === 'string') {
                        return <option key={option}>{option}</option>
                    }else{
                        const data = customKey ? option[customKey] : option.value;
                        return <option key={data}>{data}</option>
                    }
                })}
            </select>            
    )
}
