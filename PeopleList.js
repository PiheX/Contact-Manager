import React from 'react';
import { connect } from 'react-redux';

function PeopleList(props) {
    const item = props.contacts; // Array ---> initialState.contacts
    const listItems = item.map(
      (value, index) => <li key={index}>{value}</li>
    );
    return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(PeopleList)