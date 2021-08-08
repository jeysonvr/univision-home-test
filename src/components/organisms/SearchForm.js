import React from 'react';
import { NormalForm } from '../molecules/NormalForm';

export const SearchForm = ({ handleSearch }) => {

    return (
        <>
            <NormalForm
                handleSearch={ handleSearch }
            />
        </>
    )
}
