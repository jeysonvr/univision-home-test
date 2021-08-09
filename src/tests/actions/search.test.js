import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setFullImage, setKeyword, setScrollSlider } from "../../actions/search";
import { types } from '../../types/types';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    keyword: 'mars',
    offset: 0,
    imgURL: 'http:img.com',
    imgTitle: 'my title',
    scrollSlider: 0
});


describe('Test in search-action', () => {

    test('should set Keyword and offset', () => {
        const keyword = 'jupiter';
        const offset = 10;

        store.dispatch( setKeyword(keyword, offset) );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.setParameters,
            payload: {
                keyword: keyword,
                offset: offset
            }
        })
    })

    test('should set full image parameters', () => {
        const url = 'http://newImage.com';
        const title = 'New image';

        store.dispatch( setFullImage(url, title) );
        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.setFullImage,
            payload: {
                imgURL: url,
                imgTitle: title
            }
        })
    })

    test('should set scroll container position', () => {
        const scroll = 115;

        store.dispatch( setScrollSlider(scroll) );
        const actions = store.getActions();

        expect( actions[2] ).toEqual({
            type: types.setScrollSlider,
            payload: {
                scroll: scroll
            }
        })
    })

})