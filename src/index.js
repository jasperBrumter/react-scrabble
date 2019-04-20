import React from 'react';
import ReactDOM from 'react-dom';

// import Middleware and 
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// import Reducers
import letterReducer from "./reducers/letterReducer";
import wordReducer from "./reducers/wordReducer";

// import Components and files
import './index.css';
import App from './App';

const reducers = combineReducers({
	letters: letterReducer,
	yourword: wordReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

ReactDOM.render(
	<Provider store={createStore(reducers, {}, middlewares)} >
		<App />
	</Provider >,
	document.getElementById('root')
);