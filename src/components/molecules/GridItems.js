import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollSlider } from '../../actions/search';
import { imgRequired } from '../../helpers/extra';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { Button } from '../atoms/Button';
import { GridItem } from '../atoms/GridItem';

export const GridItems = ({ handleRequiredImage }) => {
    
    const divRef = useRef();
    const dispatch = useDispatch();
    const { keyword, offset, scrollSlider } = useSelector(state => state.search);
    const { data:images, loading } = useFetchGifs(keyword, offset);

    const handleScrollLeft = () => {
        divRef.current.scrollLeft -= 160;
    }

    const handleScrollRight = () => {
        divRef.current.scrollLeft += 160;
    }

    const handleScroll = () => {
        dispatch( setScrollSlider(divRef.current.scrollLeft) );

        if( imgRequired(divRef.current) ) {
            handleRequiredImage();
        }
    }

    useEffect(() => {
        if( divRef.current && scrollSlider === 0 ){
            divRef.current.classList.add('fast');
            divRef.current.scrollLeft = 0;
            divRef.current.classList.remove('fast');
        }
    }, [scrollSlider])

    return (
        <>
            { loading && <p className="card">Loading</p> }

            {
                (images.length) 
                ? 
                    <div 
                        className="gridItem__card-grid" 
                        onScroll={ handleScroll } 
                        ref={ divRef }
                    >
                        <div className="gridItem__button left">
                            <Button
                                icon={ 'fas fa-angle-left' }
                                handleClick={ handleScrollLeft }
                            />
                        </div>  
                        <div className="gridItem__button right">
                            <Button
                                handleClick={ handleScrollRight }
                                icon={ 'fas fa-angle-right' }
                            />
                        </div>  
                        <div className="gridMain">
                            { 
                                images.map( img => (
                                    <GridItem 
                                        key={ img.id } 
                                        parentScrollPosition = { scrollSlider }
                                        {...img}
                                    />
                                ))
                            }
                        </div>
                    </div>  
                :
                    <div className="alert alert-primary m-5" role="alert">
                        Search something ...
                    </div>
            }
        </>
    )
}
