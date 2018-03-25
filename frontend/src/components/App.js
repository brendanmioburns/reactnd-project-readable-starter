import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import * as Actions from '../actions';
import Categories from './Categories';
import Post from './Post';
import Posts from './Posts';
import PostDetail from './PostDetail';
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

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Readable Forum</h1>
          </header>
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <Categories />
                <br/>
                <br/>
                <Posts />
              </div>
            )}/>
            <Route exact path='/:category/posts' component={PostsByCategory} />
            <Route exact path='/:category/posts/:post_id' component={PostDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}
// <Route exact path='/:category/:post_id' component={PostDetail} />

function mapStateToProps ({ categories, posts, comments }) {
  return {
    categories,
    posts,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
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
