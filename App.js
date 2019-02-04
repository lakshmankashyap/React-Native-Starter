import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./src/Store/Reducers";

import Test from "./src/Components/Test";


class App extends React.Component {
  render() {
    
    const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));

    return (
      <Provider store={store}>
       <Test/>
      </Provider>
    );
  }
}

export default App