import { types } from "../types/types";


export const searchReducer = (state={}, action) => {
    switch (action.type) {
        case types.setParameters:
            return {
                keyword: action.payload.keyword,
                offset: action.payload.offset
            }
        case types.setFullImage:
            return {
                ...state,
                imgURL: action.payload.imgURL,
                imgTitle: action.payload.imgTitle
            }
        case types.setScrollSlider:
            return {
                ...state,
                scrollSlider: action.payload.scroll,
            }
        default:
            return state;
    }
}
