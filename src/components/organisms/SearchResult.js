import React from 'react';
import {  useDispatch ,useSelector } from 'react-redux';
import { setFullImage, setKeyword } from '../../actions/search';
import { GridItems } from '../molecules/GridItems';
import { ItemFull } from '../molecules/ItemFull';

export const SearchResult = () => {

    const dispatch = useDispatch();
    const { keyword, offset, imgURL, imgTitle } = useSelector(state => state.search);

    const handleRequiredImage = () => {
        dispatch( setKeyword(keyword, offset + 10) );
    }

    const handleCloseModal = () => {
        dispatch( setFullImage('','') );
    }

    return (
        <>
            <GridItems
                keyword={ keyword }
                offset = { offset }
                handleRequiredImage={ handleRequiredImage }
            />

            {
                (imgURL) 
                && <ItemFull 
                        url={ imgURL }
                        imgTitle={ imgTitle }
                        handleCloseModal={ handleCloseModal }
                    />
            }
        </>
    )
}
