const modalStyles ={
  modalTitle:{
    background: '#f0a820',
    borderBottom: '1px solid rgba(240, 237, 232, 0.36)',
    '& > h2':{
      color: '#3b3c54',
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      fontWeight: '900'
    }
  },
  modalContent:{
    background: '#f0b33f',
    fontFamily: 'Montserrat',
    lineHeight: '1.5',
    color: '#524a4d',
    fontWeight: '500',
    position: 'relative',
    '& h3':{
      color: '#3b3c54',
      fontFamily: 'Oswald',
      fontSize: '2rem',
      fontWeight: '900'
    }
  },
  imagenModal:{
    position: 'absolute',
    top: '50%',
    opacity: '0.1',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '480px',
  }
}
export default modalStyles;
