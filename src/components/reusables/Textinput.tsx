import React from 'react';

interface TextInputProps {
  label?: string;
  type?: string;
  labelClass?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (value: string) => void;
  wrapperClass?: string;
}

const Textinput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  labelClass,
  type = 'text',
  className = 'border border-blue-400 px-2 py-2 bg-slate-100',
  wrapperClass = 'flex flex-col'
}) => (
  <div className={wrapperClass}>
    {label && <label className={labelClass}>{label}</label>}
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default Textinput;
