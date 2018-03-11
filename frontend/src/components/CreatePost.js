import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class CreatePost extends Component {
  render () {
    return (
      <div>
        <Dialog
          title="New comment"
          modal={true}
        >
        <TextField hintText="Create a New Post"/>
        </Dialog>
      </div>
    )
  }
}

export default CreatePost;
