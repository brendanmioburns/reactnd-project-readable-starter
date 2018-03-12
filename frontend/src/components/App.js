import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import MenuDropDown from './MenuDropDown';
import { retrieveAllCategories, retrieveAllPosts } from '../utils/api';
import * as Actions from '../actions';
import Posts from './Posts';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import PostsByCategory from './PostsByCategory';

class App extends Component {

  state = {
    categories: null,
    posts: null,
    comments: null,
    menuClicked: false,
  }

  onMenuClick = () => {
    this.setState({
      menuClicked: !this.state.menuClicked
    })
  }

  getCategories = () => {
    retrieveAllCategories()
      .then((categories) => this.props.loadAllCategories(categories))
  }

  getPosts = () => {
    retrieveAllPosts()
      .then((posts) => this.props.loadAllPosts(posts))
  }

  componentDidMount() {
    this.getCategories()
    console.log(this.state)
    this.getPosts()
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable Forum</h1>
        </header>
        <AppBar
          onMenuClick={this.onMenuClick}
          menuClicked={this.state.menuClicked}
        />
        <br/>
        <Button label="Create Post" primary={true}/>
        <Switch>
          <Route exact path="/" render={()=><Posts />}/>
          <Route exact path="/new" component={CreatePost}/>
          <Route exact path='/:category' component={PostsByCategory} />
          <Route exact path="/edit:id" component={EditPost}/>

        </Switch>

        <Snackbar open={false}/>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts, comments }) {
  return {
    categories,
    posts,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllCategories: (data) => dispatch(Actions.loadAllCategories(data)),
    loadAllPosts: (data) => dispatch(Actions.loadAllPosts(data)),
    createNewPost: (data) => dispatch(Actions.createNewPost(data)),
    editPost: (data) => dispatch(Actions.editPost(data)),
    deletePost: (data) => dispatch(Actions.deletePost(data)),
    upvotePost: (data) => dispatch(Actions.upvotePost(data)),
    downvotePost: (data) => dispatch(Actions.downvotePost(data)),
    createNewComment: (data) => dispatch(Actions.createNewComment(data)),
    editComment: (data) => dispatch(Actions.editComment(data)),
    deleteComment: (data) => dispatch(Actions.deleteComment(data)),
    upvoteComment: (data) => dispatch(Actions.upvoteComment(data)),
    downvoteComment: (data) => dispatch(Actions.downvoteComment(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
