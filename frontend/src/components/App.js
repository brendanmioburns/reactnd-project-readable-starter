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
            <Route path='/new' component={CreatePost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
