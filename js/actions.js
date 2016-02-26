/**
 * Created by Yash on 23/02/16.
 */

/*
 This module contains action creators. They are functions which will return an object describing the actions.
 These actions are imported by Redux-aware components who need them, in our case it is just Home.
 */

var constants = require("./constants");

module.exports = {

  onNoteChange: function (changeItem, oldNoteObject) {
    return {
      changeItem,
      oldNoteObject,
      ['type']: constants.ON_NOTE_CHANGE
    };
  },

  onNoteClick: function (selectedNoteId) {
    return {
      type: constants.LOAD_NOTE,
      selectedNoteId: selectedNoteId
    };
  },

  addNote: function () {
    return {
      type: constants.ADD_NOTE
    };
  },

  deleteNote: function (note) {
    return {
      type: constants.DELETE_NOTE
    };
  },

  deleteAllNotes: function () {
    return {
      type: constants.DELETE_ALL_NOTES
    };
  }
};
