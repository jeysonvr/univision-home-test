import React from 'react';

export const Button = ({ handleClick, icon, classList='', content='' }) => {
    return (
        <>
            <button 
                className={ classList } 
                onClick={ handleClick }
            >
                <i className={ icon }></i>
                { content }
            </button>
        </>
    )
}
