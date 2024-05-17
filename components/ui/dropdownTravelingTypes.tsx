import type { Option } from '../../types/type';

interface dropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label? : string,
    options: any[];
    value?: string;
    customKey?: string;
}

const typesOptions : Option[] = [
    { label: 'Solo', value: 'Solo' },
    { label: 'Family', value: 'Family' },
    { label: 'Friends', value: 'Friends' },
    { label: 'Business', value: 'Business' },
    { label: 'Road Trip', value: 'Road Trip'},
    { label: 'Adventure', value: 'Adventure'},
    { label: 'Event', value: 'Event'},
    { label: 'Other', value: 'Other'},
];

const DropdownTravelingTypes = (props: dropdownProps) => {
    const travelingTypes = typesOptions;
    const {name, label, value, onChange} = props;
    return (
    
        <select name={name} value={value} onChange={onChange}
            className="mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>{label}</option>
            {travelingTypes.map((option) => (
                <option key={option.value} value={option.value} label={option.label}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
export default DropdownTravelingTypes