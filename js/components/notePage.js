import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions'

import NoteInput from './noteInput'

let mapStateToProps = function (state) {
  return {
    note: state.notes.find(function (note) {
      return note.id === state.selectedNoteId;
    })
  };
};

let mapDispatchToProps = function (dispatch) {
  return {
    onNoteChange: function (changeItem, oldNoteObject) {
      dispatch(actions.onNoteChange(changeItem, oldNoteObject));
    },
    addNote: function () {
      dispatch(actions.addNote());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteInput);

