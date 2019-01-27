import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import modalStyles from '../styles/modalStyles';
import birra from '../cheers.svg';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const DetailBeer = (props) =>{
  const {classes} = props;
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="beer-title"
        aria-describedby="beer-description"
      >
        <DialogTitle id="beer-title" className={classes.modalTitle}>
          {props.name}
        </DialogTitle>
        <DialogContent id="beer-description" className={classes.modalContent}>
          {props.description ?
            <div>
              <h3>Description</h3>
              {props.description}
            </div> : null}
          {props.food ?
            <div>
              <h3>Matching Food</h3>
              {props.food.map(function(food,i){
                return(
                  <p key={i}>{food}</p>
                )
              })}
            </div> : null}
          {props.tips ?
            <div>
              <h3>Tips</h3>
              {props.tips}
            </div> : null}
          <img src={birra} alt="birra" className={classes.imagenModal}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(modalStyles)(DetailBeer);
