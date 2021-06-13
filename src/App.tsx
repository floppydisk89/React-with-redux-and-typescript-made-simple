import React from 'react';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import allReducers from './reducers';
import Page from './page';

function App() {
  
  //A store is created with all the reducers combined
  const store = createStore(allReducers)
  
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
}

export default App;
