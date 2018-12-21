import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {styles} from './styles';

interface IProps {
  classes: any;
  loginWithGoogle: any;
}

const Header: React.FunctionComponent<IProps> = ({
  classes,
  loginWithGoogle
}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          align="center"
          className={classes.grow}
        >
          WISHLIST
        </Typography>
        <Button color="inherit" onClick={loginWithGoogle}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
