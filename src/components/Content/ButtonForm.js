import React from 'react'

const ButtonForm = ({dirty,isValid}) => {
    return (
        <button
            type="submit"
            className={dirty && isValid ? "" : "disabled-btn"}
            disabled={!(dirty && isValid)}>
            Sign In
        </button>
    )
}

export default ButtonForm




