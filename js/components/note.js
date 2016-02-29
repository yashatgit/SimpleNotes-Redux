/**
 * Created by Yash on 23/02/16.
 */

import React, { PropTypes } from 'react'

import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={Colors.grey400}/>
  </IconButton>
);

const listItemStyle = {
  padding: '0px !important',
  'paddingLeft': '10px',
  'fontSize': '14px',
  'backgroundColor': 'white'
};

const getStyle = function (index) {
  return {
    'top': (index * -13) + 'px'
  }
};

const Note = props => {
  var noteData = props.note,
    rightIconMenu = React.createElement(IconMenu, {
      onNoteDelete: props.onNoteDelete,
      iconButtonElement: iconButtonElement
    }, <MenuItem onClick={ _ => props.onNoteDelete(noteData)}>Delete</MenuItem>);

  return (
    <div className="noteItemWrap" style={getStyle(props.index)}>
      <ListItem style={listItemStyle} className="noteItem"
                onClick={props.onNoteClick.bind(this, noteData.id)}
                rightIconButton={rightIconMenu} primaryText={noteData.t}
                secondaryText={<span className="noteText">{noteData.c}</span>}
                secondaryTextLines={2}
        >
        <div className="noteTime">{new Date(noteData.d).ddmm()}</div>
      </ListItem>
    </div>
  )
};

//Note.propTypes = {
//  noteData: PropTypes.bool.isRequired,
//  onClick: PropTypes.func.isRequired,
//  onDelete: PropTypes.func.isRequired
//};

export default Note;
