import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import headerStyles from '../styles/headerStyles';

const Header = (props) => {
  const {classes} = props;
  return (
    <header className={classes.header}>
      <span className={classes.subtitle}>choose your</span>
      <h1 className={classes.title}> Beer! </h1>

    </header>
  )
}

export default withStyles(headerStyles)(Header);
