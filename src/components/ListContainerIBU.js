import React from 'react';
import 'whatwg-fetch';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import BeerBox from './BeerBox';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import searchStyles from '../styles/searchStyles';
import withStyles from "@material-ui/core/styles/withStyles";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      filter: []

    };
  }

  componentDidMount() {
    fetch(`https://api.punkapi.com/v2/beers?ibu_gt=${this.props.value}&ibu_lt=${this.props.value + 10}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        beers: json
      });
      this.setState({
        filter: json
      });
    })
  }

  filterList = (event) => {
    var updatedList = this.state.beers;
    updatedList = updatedList.filter(function(item){
    return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filter: updatedList});
  }


  render (){
    const {filter} = this.state;
    const {classes} = this.props;
    return(
      <>
      <Header />
      <TextField
        className={classes.textField}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end"><SearchIcon className={classes.searhIcon}/></InputAdornment>,
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        id="standard-search"
        label="Search by Name..."
        type="search"
        fullWidth
        onChange={this.filterList}
        variant="outlined"
      />
      <Grid container direction="column" justify="space-between" alignItems="flex-start">
        {filter.map(beer =>
          <BeerBox key={beer.id} {...beer} />
        )}
      </Grid>
      </>
    )
  }
}

export default withStyles(searchStyles)(ListContainer);
