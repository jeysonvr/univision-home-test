import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { SearchScreen } from "../../../components/templates/SearchScreen";
import { setKeyword, setScrollSlider } from "../../../actions/search";

jest.mock('../../../actions/search', () => ({
    setScrollSlider: jest.fn(),
    setKeyword: jest.fn()
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
        <SearchScreen /> 
    </Provider>
);

describe('Test in <SearchScreen />', () => {

    beforeEach( () => {
        store = mockStore(initialState);
        jest.clearAllMocks();
    })

    test('should show component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should trigger action handleSearch', () => {
        
        wrapper.find('.btn-primary').prop('onClick')({preventDefault(){}});
        expect( setKeyword ).toHaveBeenCalled();
        expect( setScrollSlider ).toHaveBeenCalled();
    })
    

})