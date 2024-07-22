import { createStore, combineReducers } from 'redux';
import notesReducer from './reducers/notesReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
});

const store = createStore(rootReducer);

export default store;
