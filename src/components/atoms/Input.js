import React from 'react'

export const Input = ({ keyword, handleInputChange }) => {
    return (
        <input 
            className="col-12 col-sm-10 col-md-6"
            style={{marginRight: '10px'}}
            type="text"
            placeholder="Search ..."
            autoComplete="off"
            name="keyword"
            value={ keyword }
            onChange={ handleInputChange }
        />
    )
}
