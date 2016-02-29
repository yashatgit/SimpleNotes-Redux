/**
 * Created by Yash on 23/02/16.
 */

/*
 This is the initial state of the Redux Store. I store it in a separate file because I also use
 it in the reducers when we do the Reset action.
 It returns a function instead of an object to make sure no one can change the initial state.
 */

import {uniqueId} from 'lodash'

module.exports = function () {
  var firstId = uniqueId();

  return {
    notes: [
      {
        id: firstId,
        t: 'Untitled Note',
        c: 'Untitled Note content',
        d: +new Date()
      },
      {
        id: uniqueId(),
        t: 'Untitled Note 2',
        c: 'Untitled Note content 2',
        d: +new Date()
      }
    ],
    selectedNoteId: firstId
  };
};
