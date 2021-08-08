import React from 'react';
import { Provider } from "react-redux";
import { SearchScreen } from './components/templates/SearchScreen';
import { store } from './store/store';


export const App = () => {
  return (
    <Provider store={ store }>
      <SearchScreen />
    </Provider>
  )
}