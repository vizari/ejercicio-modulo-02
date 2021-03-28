import React from 'react'

export const Input = ({ 
    type="text",
    name,
    label, 
    value, 
    onChange, 
    placeholder,
    disabled = false,
    checked
}) => {

    const classLabel = type === "radio" ? 'form-check-label pr-1': ' ' ;
    const classTypeInput = type === "radio" ? 'form-check-input' : 'form-control ';

    return (
  
        <div className="form-group text-left">
            <label htmlFor="" className={classLabel} > {label} </label>
            <input 
                placeholder={placeholder}
                className={classTypeInput}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                disabled={disabled} 
                checked={type === "radio" ? checked : ''}
            />
        </div>
    )
}

export default Input;