import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { retrieveAllCategories } from '../utils/api';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class Categories extends Component {

  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  getCategories = () => {
    retrieveAllCategories()
    .then((categories) => this.props.loadAllCategories(categories))
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    const { categories, classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div style={{float:'left'}}>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Categories
        </Button>
        <Menu
          id="simple-menu"
          anchorElement={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {categories.map((category, index) => {
            return (
              <MenuItem key={index} onClick={this.handleClose}>
                <Link to={`/${category.path}/posts`} style={{textDecoration: 'none'}}>
                  {category.name[0].toUpperCase() + category.name.slice(1)}
                </Link>
              </MenuItem>
            )
          })}
        </Menu>
      </div>
    )
  }
}

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllCategories: (data) => dispatch(Actions.loadAllCategories(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
