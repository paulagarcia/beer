  const drawerWidth = 240;

  const sideBarStyles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      '-ms-overflow-style': 'none',
      overflow: '-moz-scrollbars-none',
      '&::-webkitScrollbar' :{
        display: 'none',
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#41425c'
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#3b3c54',
      padding: theme.spacing.unit * 3,
      minHeight: '100vh'
    },
    title:{
      background: '#3b3c54',
      padding: '2em 0.5em',
      fontFamily: 'montserrat',
      color: '#f0a820',
      marginTop: '1.5em',
    },
    subtitle:{
      color: '#818194',
      fontFamily: 'Oswald',
      padding: '0em 0.6em',
      fontSize: '1.4rem',
      fontWeight: '300',
      cursor: 'pointer',
    },
    button:{
      padding: '5px 10px',
      marginBottom: '0.8em',
      color: '#f0a820',
      borderColor: '#818194',
      fontFamily: 'Montserrat',
      fontSize: '1rem',

    }
  });


export default sideBarStyles;
