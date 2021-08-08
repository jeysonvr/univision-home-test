import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../atoms/Button';

export const ItemFull = ({handleCloseModal}) => {

    const { imgURL, imgTitle } = useSelector(state => state.search);

    return (
        <>
            <div className="modal animate__animated animate__fadeIn" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center">
                        <div className="modal-header">
                            <h5 className="modal-title">{ imgTitle || "No name" }</h5>
                            <Button
                                classList={ 'btn button__close' }
                                handleClick={ handleCloseModal }
                                icon={ 'fas fa-times-circle fa-2x' }
                            />
                        </div>
                        <div className="modal-body card">
                            <img 
                                className="img-fluid"
                                src={ imgURL }
                                alt={ imgTitle }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    )
}
