import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';
import './style.css';

const initialState = {
  contacts: ["Johnny Depp", "Gwyneth Paltrow", "Robert Pattinson"]
};

// The reducer function handles the actions.
// Takes the current state and the action as its parameters and returns the new state.
// reducer(PeopleList, AddPersonForm)
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state, contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById("root")
);


