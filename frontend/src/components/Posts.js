import React, { Component } from 'react';
import * as ForumAPI from '../utils/api';
import GridList, { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

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
  componentDidMount() {
    const data = ForumAPI.retrieveAllPosts()
    console.log('all posts', data)
  }
  render () {
    return (
      <div>
        <GridList cellHeight={500} cellWidth={360} cols={1}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}


            >
              <Paper style={style} zDepth={5} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Posts;
// <IconButton><ThumbDown/></IconButton>
