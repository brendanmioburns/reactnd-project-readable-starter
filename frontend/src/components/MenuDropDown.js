import React, { Component } from 'react';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

export const MenuDropDown = () => (
  <div>
    <Paper style={style}>
      <MenuList>
        <MenuItem primaryText="Categories"/>
      </MenuList>
    </Paper>
  </div>
)
