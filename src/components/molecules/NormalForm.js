import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

export const NormalForm = ({ handleSearch }) => {

    const [values, handleInputChange] = useForm({
        keyword: ''
    });
    const { keyword } = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        if( document.querySelector('.gridItem__card-grid') ) {
            document.querySelector('.gridItem__card-grid').classList.add('fast');
            document.querySelector('.gridItem__card-grid').scrollLeft = 0;
            document.querySelector('.gridItem__card-grid').classList.remove('fast');
        }

        handleSearch(keyword);
    }

    return (
        <>
            <form onSubmit={ handleSubmit } className="row m-2">
                    <label className="col-2 col-sm-10 col-md-2">Keyword: </label>
                <Input
                    keyword={ keyword }
                    handleInputChange={ handleInputChange }
                />
                <Button 
                    handleClick={ handleSubmit }
                    icon={ '' } 
                    content={'Search'}
                    classList={ 'btn btn-primary col-sm-10 col-md-3 mt-1' }
                />
            </form>
        </>
    )
}
