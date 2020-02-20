import React from 'react'
import './styles.scss'


interface Props {
  name: string
  label: string
  options: {
      value: number;
      text: string;
  }[]
  placeholder?: string
}

export default function SelectField({
  name,
  label,
  options,
  placeholder,
}: Props) {
  return (
    <div className="select-field">
      <label
        htmlFor={name}
        className="select-field__label"
      >
        {label}
      </label>

      <select
        id={name}
        className="select-field__select"
        placeholder={placeholder}
      >
        {options.map(option => (
          <option
            value={option.value}
            className="select-field__option"
          >{option.text}</option>
        ))}
      </select>
    </div>
  )
}
