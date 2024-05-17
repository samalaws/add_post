import type { Option } from '../../types/type';

interface dropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label? : string,
    options: any[];
    value?: string;
    customKey?: string;
}

const transportationOptions: Option[] = [
    { label: 'Car', value: 'Car' },
    { label: 'Plane', value: 'Plane' },
    { label: 'Bus', value: 'Bus' },
    { label: 'Train', value: 'Train' },
    { label: 'Ship', value: 'Ship' },
    { label: 'Other', value: 'Other' },
];

const DropdownTransport = (props: dropdownProps) => {
    const transportOptions = transportationOptions;
    const {name, label, value, onChange} = props;
    return (
        <select name={name} value={value} onChange={onChange}
        className="mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>{label}</option>
            {transportOptions.map((option) => (
                <option key={option.value} value={option.value} label={option.label}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
export default DropdownTransport