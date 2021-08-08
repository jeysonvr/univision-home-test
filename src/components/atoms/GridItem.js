import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { setFullImage } from '../../actions/search';
import { elementInViewport } from '../../helpers/extra';

export const GridItem = ({id, title, url, parentScrollPosition = 0}) => {

    const inputRef = useRef();
    const [path, setPath] = useState('');
    const dispatch = useDispatch();
    

    useEffect(() => {
        if( !path && elementInViewport(inputRef.current, parentScrollPosition) ) {
            setPath(url);
        }
    }, [parentScrollPosition]);

    const handleImageClick = () => {
        dispatch( setFullImage(url, title) );
    }

    return (
        <div className="gridItem__container animate__animated animate__fadeIn">
            <img 
                alt={ title } 
                className="img-thumbnail lazy"
                onClick={ () => handleImageClick(url, title) } 
                ref={ inputRef }
                src={ path } 
            />
        </div>
    )
}
