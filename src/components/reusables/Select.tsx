import React from 'react';

interface Option {
  name: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value: string | number;
  label: string;
  onChange: (value: string | number) => void;
  labelClass?: string;
  className?: string;
  wrapperClass?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  labelClass = 'font-bold',
  className = 'bg-slate-200 px-4 py-2',
  wrapperClass = 'flex flex-col'
}) => (
  <div className={wrapperClass}>
    {label && <label className={labelClass}>{label}</label>}
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className={className}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
