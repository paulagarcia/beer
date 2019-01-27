import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListContainer from './ListContainer';
import ListContainerABV from './ListContainerABV';
import ListContainerIBU from './ListContainerIBU';
import sideBarStyles from '../styles/sideBarStyles'

class SideBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      filterOption: '',
      value: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, value, filterOption) {
    this.setState({ filterOption: filterOption });
    this.setState({ value: value });
  }


  render(){
    const { classes } = this.props;
    const abv = [...Array(12).keys()].slice(2)
    const ibu = [...Array(11).keys()].slice(0).map(function(x) { return x * 10 });
    let filterOption = this.state.filterOption;
    let value = this.state.value;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <h2 className={classes.title}> Filter by ... </h2>
          <div>
            <p className={classes.subtitle} onClick={(e) => this.handleClick(e, null, '')}>Limpiar Filtro</p>
            <p className={classes.subtitle}>Alcohol by Volume (ABV)</p>
            <Grid container justify="space-around">
              {abv.map(i => {
                return(
                <Button variant="outlined" className={classes.button} key={i} onClick={(e) => this.handleClick(e, i, 'abv')}>
                  {i}% - {i+1}%
                </Button>
              )
              })}
            </Grid>
          </div>
          <Divider />
          <p className={classes.subtitle}>International Bitterness Units (IBU)</p>
          <Grid container justify="space-around">
            {ibu.map(function(value, i) {
              if ( i <= (ibu.length -2)) {
                return(
                  <Button variant="outlined" className={classes.button} key={i} onClick={(e) => this.handleClick(e, value, 'ibu')}>
                   {value} - {ibu[i+1]}
                   </Button>
                 )
              }
            }, this)}
          </Grid>
        </Drawer>
        <main className={classes.content}>
        {(() => {
          switch(filterOption) {
            case 'abv':
              return <ListContainerABV value={value} />;
            case 'ibu':
              return <ListContainerIBU value={value} />;
            default:
              return <ListContainer />;;
            }
          })()}

        </main>
      </div>
    );
  }
}

export default withStyles(sideBarStyles)(SideBar);
