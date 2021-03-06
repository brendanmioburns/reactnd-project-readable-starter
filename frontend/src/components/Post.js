import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { translateDate } from '../utils/helpers';
import { deletePost, voteOnPost } from '../utils/api';
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

class Post extends Component {

  state = {
    score: this.props.post.voteScore,
    deleted: this.props.post.deleted,
  }

  handleDelete = () => {
    const { post } = this.props

    deletePost(post)
      .then((data) => this.props.removePost(data))

    this.setState({
      deleted: !this.props.post.deleted,
    })
  }

  handleUpVote = () => {
    const { id } = this.props.post

    voteOnPost(id, "upVote")
      .then((data) => this.props.upvotePost(data))

    this.setState({
      score: this.state.score + 1
    })
  }

  handleDownVote = () => {
    const { id } = this.props.post

    voteOnPost(id, "downVote")
      .then((data) => this.props.downvotePost(data))

    this.setState({
      score: this.state.score - 1
    })
  }

  render() {
    const { timestamp, category, id, title, body, author, voteScore, deleted, commentCount } = this.props.post;

    return (
      <div>
        {deleted === false && this.state.deleted === false && (
          <Card style={style}>
            <CardContent>
              <Typography>{translateDate(timestamp)}</Typography>
              <Typography variant="headline" component="h2">
                <Link to={`/${category}/posts/${id}`} >
                  {title}
                </Link>
              </Typography>
              <Typography>
                {author}
              </Typography>
              <br/>
              <Typography>
                Vote Score: {this.state.score}
              </Typography>
              <Typography>
                Comments: {commentCount}
              </Typography>
            </CardContent>
            <CardActions style={{textAlign: 'center', display: 'inline-block'}}>
              <Button size="small">Edit Post</Button>
              <Button size="small" onClick={this.handleDelete}>Delete Post</Button>
              <Button size="small" onClick={this.handleUpVote}>Upvote Post</Button>
              <Button size="small" onClick={this.handleDownVote}>Downvote Post</Button>
            </CardActions>
          </Card>
        )
      }
      <br/>
    </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => dispatch(Actions.removePost(data)),
    upvotePost: (data) => dispatch(Actions.upvotePost(data)),
    downvotePost: (data) => dispatch(Actions.downvotePost(data)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Post);
