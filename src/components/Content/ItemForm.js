import React from 'react'
const ItemForm = ({placeholder,label,type,name,handleBlur,handleChange,values,errors,touched}) => {
    return (
             <div className="form-row">
                  <label >{label}</label>
                  <input
                    type={type}
                    name={name}
                    id={name}
                    value={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors && touched? "input-error" : null}
                    placeholder={placeholder}
                  />
                  {errors && touched && (
                    <span className="error">{errors}</span>
                  )}
                </div>
    )
}

export default ItemForm
