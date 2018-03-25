import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { translateDate } from '../utils/helpers';
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

  render() {
    const { timestamp, category, id, title, body, author, voteScore, deleted, commentCount } = this.props.post;

    return (
      <div>
        {deleted === false && (
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
                Comments: {commentCount}
              </Typography>
            </CardContent>
            <CardActions style={{textAlign: 'center',
            display: 'inline-block'}}>
              <Button size="small">Edit Post</Button>
              <Button size="small">Delete Post</Button>
              <Button size="small">Upvote Post</Button>
              <Button size="small">Downvote Post</Button>
            </CardActions>
          </Card>
        )
      }
      <br/>
    </div>
    )
  }
}

export default Post;
