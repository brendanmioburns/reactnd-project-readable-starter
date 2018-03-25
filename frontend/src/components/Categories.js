import React, { Component } from 'react';
import PostsByCategory from './PostsByCategory';
import { Link, Route, Switch } from 'react-router-dom';
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

  handleClick = e => {
    e.preventDefault()
    this.setState({ anchorEl: e.currentTarget })
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
    const { categories } = this.props;
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
          anchorelement={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          {categories.map((category, index) => {
            const categoryMenuItem = `${category.name[0].toUpperCase()}${category.name.slice(1)}`;

            return (
              <MenuItem key={index} onClick={this.handleClose}>
                <Link
                  to={`/${category.path}/posts`}
                  style={{textDecoration: 'none'}}
                >
                {categoryMenuItem}
                </Link>

              </MenuItem>
            )
          })}
        </Menu>

      </div>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadAllCategories: (data) => dispatch(Actions.loadAllCategories(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
