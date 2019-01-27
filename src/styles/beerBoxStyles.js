const beerBoxStyles = {
  box:{
    width: '100%',
    background: '#4d4e66',
    padding: '1em',
    borderRadius: '4px',
    marginBottom: '2em',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    flexWrap: 'nowrap',
    position: 'relative'
  },
  imgContainer:{
    borderRadius: '50%',
    background: '#3b3c54',
    width: '200px',
    height: '200px',
    position: 'relative',
    boxShadow: '1px 1px 20px 0px #3b3c54',
    '& > img':{
      maxHeight: '150px',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      top: '50%',
    }
  },
  dataContainer:{
    paddingRight: '0.5em',
  },
  title:{
    fontSize: '3rem',
    fontWeight: '900',
    margin: '0',
    color: '#f0a820',
    fontFamily:'Montserrat',
  },
  subtitle:{
    fontFamily:'Montserrat',
    color: '#f0a820',
    marginTop: '0.2em',
    letterSpacing: '3px',
  },
  date:{
    fontFamily: '"Oswald", sans-serif',
    color: '#818194',
    fontWeight: '300',
    letterSpacing: '-2px',
    fontSize: '2rem',
    marginTop: '0',
  },
  infoContainer:{
    '& > p':{
      fontFamily: 'oswald',
      color: '#818194',
      fontWeight: '300',
      fontSize: '1.5rem',
      margin: '0',
      '& > span':{
        fontFamily: 'Montserrat',
        color: '#f0a820',
        fontSize: '2rem',
        display: 'block',
        fontWeight: '700',
      }
    }
  },
  fab:{
    color: '#f0a820',
    backgroundColor: 'rgba(247, 247, 251, 0.10)',
    position: 'absolute',
    top: '7px',
    right: '7px',
    boxShadow: 'none',
    '&:hover':{
      backgroundColor: '#3b3c54',
    }
  }





}
export default beerBoxStyles;
