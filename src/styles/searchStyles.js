const searchStyles ={
  cssLabel:{
    color: '#f0a820',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    '&$cssFocused': {
      color: '#f0a820',
    },
  },
  textField:{
    width: '100%'
  },
  cssFocused:{},
  cssOutlinedInput:{
    background: 'transparent',
    marginBottom: '2em',
    '&$cssFocused $notchedOutline': {
      borderColor: '#f0a820',
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderWidth: '2px',
        borderColor: '#f0a820'
      },
  },
  notchedOutline:{},
  disabled: {},
  error: {},
  searhIcon:{
    color: '#f0a820',
    fontSize: '38px'
  },


}

export default searchStyles;
