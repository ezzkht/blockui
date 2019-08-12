import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export default class configureStore {
  static configure(initialState = {}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    var store = createStore(
      rootReducer, 
      initialState, 
      composeEnhancers(applyMiddleware(ReduxThunk))
    );

    return store;
  }
}
