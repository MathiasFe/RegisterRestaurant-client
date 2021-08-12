import { makeStyles } from '@material-ui/core';


const homeStyle = makeStyles((theme) => ({
  container:{
    '& .MuiGrid-item':{
      height:'100vh',
      width:'50vw',
      [theme.breakpoints.down('md')]:{
        width:'100vw',
      },
    },
  },
  bg:{
    height:'100%',
    width:'100%',
    objectFit:'cover',
  },

  box:{
    display:'flex',
    flexDirection:'column',
    // border:`1px solid ${theme.palette.primary.main}`,
    boxShadow:`4px 4px 10px -5px #363636, inset 1px 1px 40px 10px #fff `,
    padding:'4rem',
    '& h5':{
      color:'#4D4D4D',
      textAlign:"center",
      marginBottom:'1rem',
    },
    '& p':{
      fontSize:'1.5rem',
      textAlign:'center',
      margin:'.2rem 0 .2rem 0'
    }
  },

  EsqueciSenhaButton:{
    marginTop:'.5rem',
    fontSize:'.85rem',
    fontWeight:'400',
    opacity: '0.8',
    color:'#4D4D4D',
    textDecoration:'none',
    marginBottom:'1rem',
    transition:'all 150ms ease-in-out',
    '&:hover':{
      opacity:'1',
      fontWeight:'600'
    }
  },

  formControl:{
    width:'100%',
    marginTop:'1rem',
  },


  formulario:{
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  
  Cadastrar:{
    padding:'.55rem',
    color:"#f6f6f6",
    transition:'all 300ms easy',
    border:`2px solid ${theme.palette.secondary.main}`,
    '&:hover':{
      color:theme.palette.secondary.main,
      background:'transparent',
    }
  },

  btnLogar:{
    padding:'.55rem',
    color:"#f6f6f6",
    transition:'all 300ms easy',
    border:`2px solid ${theme.palette.primary.main}`,
    '&:hover':{
      color:theme.palette.primary.main,
      background:'transparent',
    }
  }

}));

export default homeStyle;