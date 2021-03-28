import React from 'react'

export const Select = ({ onChange, data, text, value, name}) => {

    const showLabel = text !== " " ? true : false;

    return (
        <div className="text-left">
            { showLabel && <label htmlFor="">{text}</label>}
            <select className="form-control" onChange={onChange} name={name}>
                {data.map((name, index) => (
                    <option key={index}>{name.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;