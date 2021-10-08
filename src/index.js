
//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import App from './components/App/App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import rootReducer from './redux/reducers/_root.reducer'; // ⬅ Imports ./redux/reducers/index.js
import rootSaga from './redux/sagas/_root.saga'; // ⬅ Imports ./redux/sagas/index.js
// ⬇ Dependent Functionality:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
//#endregion ⬆⬆ All document setup above.


//#region ⬇⬇ All middleware setup and rendering below:
const sagaMiddleware = createSagaMiddleware();

// ⬇ This line creates an array of all of redux middleware you want to use.  We don't want a whole ton of console logs in our production code.  Logger will only be added to your project if your in development mode:
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// ⬇ Tells the saga middleware to use the rootReducer.  rootReducer contains all of our other reducers:
const store = createStore(
  rootReducer,
  // ⬇ Adds all middleware to our project, including saga and logger:
  applyMiddleware(...middlewareList),
);

// ⬇ Tells the saga middleware to use the rootSaga.  rootSaga contains all of our other sagas:
sagaMiddleware.run(rootSaga);

  // ⬇ Rendering:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
// End index.js