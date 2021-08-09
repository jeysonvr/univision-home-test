import { searchReducer } from "../../reducers/searchReducer";
import { types } from "../../types/types";

describe( 'Test in searchReducer', () => {

    const initialWord = 'mars';
    const initialOffset = 0;
    const imgURL = 'http://img.com';
    const imgTitle= 'Img title';
    const scrollValue = 100;

    test('should setParameters', () => {

        const initialState = {};
        const action = {
            type: types.setParameters,
            payload: {
                keyword: initialWord,
                offset: initialOffset
            }
        }
        const state = searchReducer(initialState, action);

        expect( state ).toEqual({
            keyword: initialWord, 
            offset: initialOffset
        });
    })

    test('should setFullImage', () => {
        
        const initialState = {
            keyword: initialWord, 
            offset: initialOffset
        };
        
        const action = {
            type: types.setFullImage,
            payload: {
                imgURL: imgURL,
                imgTitle: imgTitle
            }
        }
        const state = searchReducer(initialState, action);

        expect( state ).toEqual({
            keyword: initialWord, 
            offset: initialOffset,
            imgURL: imgURL,
            imgTitle: imgTitle
        });
    })

    test('should setScrollSlider', () => {
        
        const initialState = {
            keyword: initialWord, 
            offset: initialOffset,
            imgURL: imgURL,
            imgTitle: imgTitle
        };
        
        const action = {
            type: types.setScrollSlider,
            payload: {
                scroll: scrollValue
            }
        }
        const state = searchReducer(initialState, action);

        expect( state ).toEqual({
            keyword: initialWord, 
            offset: initialOffset,
            imgURL: imgURL,
            imgTitle: imgTitle,
            scrollSlider: scrollValue
        });
    })

    test('should not change the state', () => {
        
        const initialState = {
            keyword: initialWord, 
            offset: initialOffset,
            imgURL: imgURL,
            imgTitle: imgTitle
        };
        
        const action = {
            type: 'abc'
        }
        const state = searchReducer(initialState, action);

        expect( state ).toEqual(initialState);
    })

})