import React from 'react';
import _ from 'lodash';
import Immutable from 'immutable'

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';


let newBtnStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  color: '#388E3C'
};

export default React.createClass({

  render(){
    var props = this.props,
      note = props.note;

    return (
      <section className="noteBook">

        <TextField
          ref="title"
          fullWidth={true} className="noteTitle" hintText="Note Title"
          value={note.t}
          onChange={function(e) {
            props.onNoteChange({
              t: e.target.value
            }, note);
          }}
          />

        <TextField
          ref="content"
          hintText="Enter Note Content" fullWidth={true} multiLine={true} rows={10}
          className="noteText"
          value={note.c}
          onChange={function(e) {
            props.onNoteChange({
              c: e.target.value
            }, note);
          }}
          />

        <FloatingActionButton backgroundColor={'#4caf50'} style={newBtnStyle} className="newNoteBtn"
                              onClick={function() {
                              props.addNote();
                              }}>
          <ContentAdd />
        </FloatingActionButton>

      </section>
    );
  }
});