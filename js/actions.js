/**
 * Created by Yash on 23/02/16.
 */

/*
 This module contains action creators. They are functions which will return an object describing the actions.
 These actions are imported by Redux-aware components who need them.
 */

import constants from "./constants"

export default {

  onNoteChange: (changeItem, oldNoteObject) => {
    return {
      changeItem,
      oldNoteObject,
      ['type']: constants.ON_NOTE_CHANGE
    };
  },

  onNoteClick: selectedNoteId => {
    return {
      type: constants.LOAD_NOTE,
      selectedNoteId: selectedNoteId
    };
  },

  addNote: () => {
    return {
      type: constants.ADD_NOTE
    };
  },

  deleteNote: note => {
    return {
      type: constants.DELETE_NOTE
    };
  },

  deleteAllNotes: _ => {
    return {
      type: constants.DELETE_ALL_NOTES
    };
  }
};
