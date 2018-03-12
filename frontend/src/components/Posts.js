import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
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

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


class Posts extends Component {

  render () {
    return (
      <div>
        <GridList cellHeight={500} cellWidth={360} cols={1}>
          {tilesData.map((tile) => (
            <Post
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
            >
              <br/>

              <Paper style={style} zDepth={5} />
            </Post>
          ))}
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
