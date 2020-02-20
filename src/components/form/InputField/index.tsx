import React from 'react'

import './styles.scss'


type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

interface InputProps {
  label: string
  name: string,
  type: 'text' | 'email' | 'password' | 'number'
  disabled?: boolean
  onChange?: React.FormEventHandler<FormControlElement>
  className?: string
  placeholder?: string
}

export default function InputField({
  type,
  name,
  label,
  disabled,
  onChange,
  className,
  placeholder,
}: InputProps) {

  return (
    <div className={`input-field${className ? ` ${className}` : ''}`}>
      <label htmlFor={name} className={`input-field__label`}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
