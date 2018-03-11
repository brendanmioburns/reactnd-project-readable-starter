import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

export const MenuDropDown = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Categories"/>
      </Menu>
    </Paper>
  </div>
)
