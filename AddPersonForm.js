import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';

function AddPersonForm(props) {
    const [person, setPerson] = useState('');
    // useState hook:
    // [current state value, a function that lets you change the state] = useState("the initial value of the state");
  
    function handleChange(e) {
      setPerson(e.target.value);
    }
    // Updates the state (person) with the current value.
    // ---> input onChange
  
    function handleSubmit(e) {
      if (person !== '') {
        props.addPerson(person);
        setPerson('');
      }
      e.preventDefault();
      // This statement prevents the default behavior of the form, which by default reloads the page when submitted.
      // ---> form onSubmit
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Add new contact"
          onChange={handleChange}
          value={person} 
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  const mapDispatchToProps = {
      addPerson
  }
  // Filled action.

  export default connect(null, mapDispatchToProps)(AddPersonForm)