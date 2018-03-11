import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import MenuDropDown from './MenuDropDown';
import * as ForumAPI from '../utils/api';
import Posts from './Posts';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

class App extends Component {

  state = {
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
    ForumAPI.retrieveAllPosts()
    ForumAPI.retrieveAllCategories()
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
        <RaisedButton label="Create Post" primary={true}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/" render={()=><Posts/>}/>
          <Route exact path="/new" component={CreatePost}/>
          <Route exact path="/edit:id" component={EditPost}/>

        </Switch>

        <Snackbar open={false}/>
      </div>
    );
  }
}

export default App;
