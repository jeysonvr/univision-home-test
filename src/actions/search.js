import { types } from "../types/types";

export const setKeyword = (keyword, offset) => {
    
    return (dispatch) => {
        dispatch( {
            type: types.setParameters,
            payload: {
                keyword: keyword,
                offset: offset
            }
        });
    }
}

export const setFullImage = (url, title) => {
    
    return (dispatch) => {
        dispatch( {
            type: types.setFullImage,
            payload: {
                imgURL: url,
                imgTitle: title
            }
        });
    }
}

export const setScrollSlider = (scroll) => {

    return (dispatch) => {
        dispatch( {
            type: types.setScrollSlider,
            payload: {
                scroll: scroll
            }
        });
    }

}