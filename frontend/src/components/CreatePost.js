import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { capitalize } from '../utils/helpers';
import { createNewPost } from '../utils/api';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {

  state = {
    title: '',
    category: '',
    author: 'thingthree',
    body: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChange = updatedValue => {
    this.setState({
      ...this.state,
      ...updatedValue,
    })
  }

  addNewPost = (post) => {
    createNewPost(post)
    .then((data) => this.props.makeNewPost(data))
  }

  onSubmit = e => {
    this.addNewPost(this.state)
    this.setState({
      title: '',
      category: '',
      body: '',
    })

  }

  render () {
    return (
      <form>
        <h2>Create a New Post</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <FormControl>
          <TextField
            name="title"
            hintText="Title"
            floatingLabelText="Title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
            floatingLabelFixed
            />
          <FormHelperText>Name Your Post</FormHelperText>
        </FormControl>
        <br />
        <br />
        <br />
        <br />
        <br />
        <FormControl>
          <InputLabel htmlFor="category-helper">Category</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            input={<Input name="category" id="category-helper" />}
          >
            {this.props.categories.map((category) => (
              <MenuItem value={category.name}>{capitalize(category.name)}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a Category</FormHelperText>
        </FormControl>
        <br />
        <br />
        <br />
        <br />
        <br />
        <TextField
          name="body"
          hintText="Body"
          floatingLabelText="Body"
          value={this.state.body}
          onChange={e => this.handleChange(e)}
          floatingLabelFixed
        />
        <br />
        <br />
        <Button label="Submit" onClick={e => this.onSubmit(e)} primary>
          <Link to={'/'}>
            Submit
          </Link>
        </Button>
        <br/>
        <br/>
        <Link to="/">Back to Home</Link>
      </form>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    makeNewPost: (data) => dispatch(Actions.makeNewPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost);
