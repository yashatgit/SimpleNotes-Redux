/**
 * Created by Yash on 23/02/16.
 */

/*
 This file defines the main Redux Store. It will be required by all "smart" components in the app
 */

import { createStore, combineReducers } from 'redux'

import noteListReducer from './reducers/noteListReducer'
import initialState from './initialState'

//https://www.reddit.com/r/javascript/comments/42ey9e/redux_reducer_composition_without_slicing_state/
module.exports = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(noteListReducer, initialState());
//module.exports = createStore(noteListReducer, initialState());
