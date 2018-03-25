import React, { Component } from 'react';
import CommentsForPost from './CommentsForPost';
import * as Actions from '../actions';
import { retrieveSinglePost, retrieveCommentsFromSinglePost } from '../utils/api';
import { capitalize, translateDate } from '../utils/helpers';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const style = {
  width: 540,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class PostDetail extends Component {

  getPost = (id) => {
    retrieveSinglePost(id)
      .then((post) => this.props.loadSinglePost(post))
  }

  getComments = (id) => {
    retrieveCommentsFromSinglePost(id)
      .then((comments) => this.props.loadAllCommentsForPost(comments))
  }

  componentDidMount() {
    const { post_id } = this.props.match.params

    this.getPost(post_id)
    this.getComments(post_id)
  }

  render() {
    const { timestamp, category, id, title, body, author, voteScore, deleted, commentCount } = this.props.selectedPost
    // const categoryTitle = `${category[0].toUpperCase()}${category.slice(1)}`
    return (
      <div>
        <h2>{title}</h2>
        <Typography>{translateDate(timestamp)}</Typography>
        <Typography>
          {author}
        </Typography>
        <br/>
        <Typography>
          {body}
        </Typography>
        <br/>
        <Button size="small">Edit Post</Button>
        <Button size="small">Delete Post</Button>
        <Button size="small">Upvote Post</Button>
        <Button size="small">Downvote Post</Button>
        <br/>
        <br/>
        <Typography>
          {`Comments (${commentCount}):`}
        </Typography>
        <CommentsForPost post={this.props.selectedPost} comments={this.props.comments}/>
        <br/>
        <br/>
        <Link to={`/${category}/posts`}>All {this.props.selectedPost.category} Posts</Link>
        <br/>
        <br/>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps ({ posts, selectedPost, comments }) {
  return {
    posts,
    selectedPost,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadSinglePost: (data) => dispatch(Actions.loadSinglePost(data)),
    loadAllCommentsForPost: (data) => dispatch(Actions.loadAllCommentsForPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
