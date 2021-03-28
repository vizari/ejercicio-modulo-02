import React from 'react'

export const Button = ({text, onClick}) => {
    return (
        <div className="mt-3">
            <button className="btn btn-info btn-lg btn-block" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;