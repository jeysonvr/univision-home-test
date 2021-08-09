import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { SearchResult } from '../../../components/organisms/SearchResult';
import { setFullImage } from '../../../actions/search';

jest.mock('../../../actions/search', () => ({
    setFullImage: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    search: {
        keyword: 'test', 
        offset: 0, 
        imgURL: 'a', 
        imgTitle: 'b'
    }
};
let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <SearchResult />
    </Provider>
);

describe('Test in <SearchForm />', () => {

    beforeEach( () => {
        store = mockStore(initialState);
        jest.clearAllMocks();
    })

    test('should show component correctly', () => {
        expect( wrapper ).toMatchSnapshot(); 
    })

    test('should trigger action handleCloseModal', () => {
        wrapper.find('.button__close').prop('onClick')();
        expect( setFullImage ).toHaveBeenCalled();
    })

})