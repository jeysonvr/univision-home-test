import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setKeyword } from '../../actions/search';
import { SearchForm } from '../organisms/SearchForm';
import { SearchResult } from '../organisms/SearchResult';


export const SearchScreen = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( setKeyword('', 0) );
    }, []);

    const handleSearch = (keyword) => {
        dispatch( setKeyword(keyword, 0) );
    }
    
    return (
        <div className="container">
            <div className="row">
                <h3>Search your favorite gifts</h3>
                <hr />
            </div>
            <SearchForm
                handleSearch={ handleSearch }
            />
            <SearchResult />
        </div>
    )
}
