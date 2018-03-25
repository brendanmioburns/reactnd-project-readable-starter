import React, { Component } from 'react';
import { capitalize, translateDate } from '../utils/helpers';
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

class Comment extends Component {

  render() {
    const { timestamp, author, body, voteScore } = this.props.comment

    return (
      <Card style={style}>
        <CardContent>
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
            Vote Score: {voteScore}
          </Typography>
        </CardContent>
        <CardActions style={{textAlign: 'center',
          display: 'inline-block'}}>
          <Button size="small">Edit Comment</Button>
          <Button size="small">Delete Comment</Button>
          <Button size="small">Upvote Comment</Button>
          <Button size="small">Downvote Comment</Button>
        </CardActions>
        <br/>
      </Card>
    )
  }
}

export default Comment;
