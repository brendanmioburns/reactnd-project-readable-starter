import React, { Component } from 'react';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import GridList, { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 360,
  width: 360,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Posts extends Component {

  render () {
    return (
      <div>
        <GridList cellHeight={500} cellWidth={360} cols={1}>

        </GridList>
      </div>
    )
  }
}

function mapStateToProps ({ posts, comments }) {
  return {
    posts,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllPosts: (data) => dispatch(Actions.loadAllPosts(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
