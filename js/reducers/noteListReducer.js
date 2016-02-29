/**
 * Created by Yash on 23/02/16.
 */

import {uniqueId} from 'lodash'
import constants from '../constants'

function getNewNote() {
  return {
    t: 'Untitled Text',
    c: '',
    d: +new Date(),
    id: uniqueId()
  }
}

function notes(state, action) {

  switch (action.type) {

    case constants.ON_NOTE_CHANGE:
      var changedNoteIndex = _.findIndex(state.notes, function (note) {
        return note.id == action.oldNoteObject.id;
      });

      return Object.assign({}, state, {
        notes: [
          ...state.notes.slice(0, changedNoteIndex),

          Object.assign({
            d: +new Date()
          }, action.oldNoteObject, action.changeItem),

          ...state.notes.slice(changedNoteIndex + 1)
        ]
      });

    case constants.ADD_NOTE:
      var newNoteObject = getNewNote();

      return Object.assign({}, state, {
        notes: [
          newNoteObject,
          ...state.notes
        ],
        selectedNoteId: newNoteObject.id
      });

    case constants.DELETE_NOTE:

      var newState = Object.assign({}, state, {
        notes: _.remove(state.notes, function (n) {
          return n.id === action.note.id
        })
      });
      newState.selectedNoteId = newState.notes[0].id;
      return newState;

    case constants.DELETE_ALL_NOTES:

      var newNoteObject = getNewNote();

      return Object.assign({}, {
        notes: [newNoteObject],
        selectedNoteId: newNoteObject.id
      });

    case constants.LOAD_NOTE:

      return Object.assign({}, state, {
        selectedNoteId: action.selectedNoteId
      });

    default:
      return state
  }
}

export default notes
