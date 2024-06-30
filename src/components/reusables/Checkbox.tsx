import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean | any) => void | any;
  wrapperClass?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  wrapperClass = ''
}) => (
  <div className={wrapperClass}>
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => onChange(!checked)}
      />{' '}
      {label}
    </label>
  </div>
);

export default Checkbox;
