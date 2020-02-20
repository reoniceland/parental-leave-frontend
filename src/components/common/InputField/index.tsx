import React from 'react'
import './styles.scss'

interface InputProps {
  label: string
  name: string,
  type: 'text' | 'email' | 'password' | 'number'
  disabled?: boolean
  className?: string
  placeholder?: string
}

export default function InputField({
  type,
  name,
  label,
  disabled,
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
      />
    </div>
  )
}
