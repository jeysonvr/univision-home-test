import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { ItemFull } from '../../../components/molecules/ItemFull';


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
        <ItemFull />
    </Provider>
);

describe('Test in <ItemFull />', () => {

    beforeEach( () => {
        store = mockStore(initialState);
        jest.clearAllMocks();
    })

    test('should show component correctly', () => {
        expect( wrapper ).toMatchSnapshot(); 
    })

})