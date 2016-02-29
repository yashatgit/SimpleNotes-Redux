import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions'

import NoteInput from './noteInput'

let mapStateToProps = state => {
  return {
    note: state.notes.find(note  => note.id === state.selectedNoteId)
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onNoteChange: (changeItem, oldNoteObject) => dispatch(actions.onNoteChange(changeItem, oldNoteObject)),

    addNote: _ => dispatch(actions.addNote())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteInput);

