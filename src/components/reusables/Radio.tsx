import React from 'react';

interface RadioOption {
  name: string;
  value: string | number;
}

interface RadioProps {
  options: RadioOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  wrapperClass?: string;
  label?: string;
  labelClass?: string;
  innerWrapperClass?: string;
}

const Radio: React.FC<RadioProps> = ({
  options,
  value,
  onChange,
  wrapperClass = '',
  label,
  labelClass = 'font-bold',
  innerWrapperClass = 'flex gap-4 py-2'
}) => (
  <div className={wrapperClass}>
    {label && <label className={labelClass}>{label}</label>}
    <div className={innerWrapperClass}>
      {options.map(option => (
        <div key={option.value} className='flex gap-2'>
          <input
            type='radio'
            id={`radio-${option.value}`}
            name='radio-group'
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
          />
          <label htmlFor={`radio-${option.value}`}>{option.name}</label>
        </div>
      ))}
    </div>
  </div>
);

export default Radio;
