import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions'

import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import Note from './note';

let NoteList = function (props) {
  var notes = props.notes;

  return (
    <div className="noteListWrap">

      <List className="noteList">

        {notes.map(function (note, index) {
          return <Note index={index}
                       onNoteClick={props.onNoteClick} onNoteDelete={props.onNoteDelete}
                       key={note.id} note={note}/>
        })}

      </List>

      <div className="noteListActions">
        <span
          style={{'float':'left', 'fontSize': '10px'}}>Last updated at: {new Date(props.selectedNote.d).ddmm()}</span>
        <span style={{'float':'right', 'cursor': 'pointer'}}
              onClick={props.onAllNotesDelete}>{'Delete All (' + notes.length + ')'}</span>
      </div>
    </div>
  );
};


let mapStateToProps = function (state) {
  return {
    notes: state.notes,
    selectedNote: state.notes.find(function (note) {
      return note.id === state.selectedNoteId;
    })
  };
};

let mapDispatchToProps = function (dispatch) {
  return {
    onNoteClick: function (noteId) {
      dispatch(actions.onNoteClick(noteId));
    },
    onNoteDelete: function (note) {
      dispatch(actions.deleteNote(note));
    },
    onAllNotesDelete: function () {
      dispatch(actions.deleteAllNotes());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
