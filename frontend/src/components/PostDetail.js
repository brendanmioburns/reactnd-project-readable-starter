import React, { Component } from 'react';
import CommentsForPost from './CommentsForPost';
import * as Actions from '../actions';
import { retrieveSinglePost, retrieveCommentsFromSinglePost, voteOnPost } from '../utils/api';
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

  state = {
    score: 0,
  }

  handleUpVote = () => {
    const { post_id } = this.props.match.params

    this.setState({
      score: this.state.score++
    })

    voteOnPost(post_id, "upVote")
      .then((data) => this.props.upvotePost(data))
  }

  handleDownVote = () => {
    const { post_id } = this.props.match.params

    this.setState({
      score: this.state.score--
    })

    voteOnPost(post_id, "downVote")
      .then((data) => this.props.downvotePost(data))
  }

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
    const { timestamp, category, id, title, body, author, voteScore, deleted, commentCount } = this.props.posts[0]
    const categoryTitle = capitalize(category)

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
        <Typography>
          Vote Score: {this.props.posts[0].voteScore}
        </Typography>
        <Button size="small">Edit Post</Button>
        <Button size="small">Delete Post</Button>
        <Button size="small" onClick={this.handleUpVote}>Upvote Post</Button>
        <Button size="small" onClick={this.handleDownVote}>Downvote Post</Button>
        <br/>
        <br/>
        <Typography>
          {`Comments (${commentCount}):`}
        </Typography>
        <CommentsForPost post={this.props.posts[0]} comments={this.props.comments}/>
        <br/>
        <br/>
        <Link to={`/${category}/posts`}>All {categoryTitle} Posts</Link>
        <br/>
        <br/>
        <Link to="/">Back to Home</Link>
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
    loadSinglePost: (data) => dispatch(Actions.loadSinglePost(data)),
    loadAllCommentsForPost: (data) => dispatch(Actions.loadAllCommentsForPost(data)),
    upvotePost: (data) => dispatch(Actions.upvotePost(data)),
    downvotePost: (data) => dispatch(Actions.downvotePost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
