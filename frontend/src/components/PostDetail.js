import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: 'blue',
  },
  pos: {
    marginBottom: 12,
    color: 'blue',
  },
};
class PostDetail extends Component {
  state = {
    redirect: false
  }


  componentDidMount() {

  }
  render() {
    return (
        <div>
          <Card>
            <CardContent>
              <Typography>Word of the Day</Typography>
              <Typography variant="headline" component="h2">
                benevolent
              </Typography>
              <Typography>adjective</Typography>
              <Typography component="p">
                well meaning and kindly.<br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit Post</Button>
            </CardActions>
          </Card>
        </div>
    )
  }
}

export default PostDetail;
