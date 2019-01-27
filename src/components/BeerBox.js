import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import beerBoxStyles from '../styles/beerBoxStyles';
//Material Components
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
// Local Components
import DetailBeer from './DetailBeer'

class BeerBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };


  render(){
    const {classes } = this.props;
    return(
      <Grid container justify="flex-start" alignItems="center" className={classes.box} key={this.props.id}>
          <Grid item sm={3}>
            <div className={classes.imgContainer}>
              <img src={this.props.image_url} alt="Birra" />
            </div>
          </Grid>
          <Grid item className={classes.dataContainer} sm={5}>
            <p className={classes.title}>{this.props.name}</p>
            <p className={classes.subtitle}>{this.props.tagline}</p>
            <p className={classes.date}>{this.props.first_brewed}</p>
          </Grid>
          <Grid item className={classes.infoContainer} sm={4}>
            {this.props.abv ? <p>Alcohol By Volume <span className={classes.number}>{this.props.abv}%</span></p> : null}
            {this.props.ibu ?<p>International Bitterness Units <span className={classes.number}>{this.props.ibu}</span></p> : null}
          </Grid>
          <Fab onClick={this.handleOpen} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
          {this.state.open ?
            <DetailBeer
             open={this.state.open}
             description={this.props.description}
             food={this.props.food_pairing}
             name={this.props.name}
             tips={this.props.brewers_tips}
             handleOpen={() => this.handleOpen()}
             handleClose={() => this.handleClose()}
            /> : null}

      </Grid>

    )
  }
}

export default withStyles(beerBoxStyles)(BeerBox);
