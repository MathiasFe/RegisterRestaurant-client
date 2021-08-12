import React, { useState } from 'react';
import InputForm from '../../Components/Form/ControlForm';
import BgImg from '../../Content/bg.jpg';

// material ui
import { Box, Grid, Button, Typography, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom';
import HomeCss from './style.js';

function Home() {
  const classes = HomeCss();
  const [profileData,setProfileData] = useState({email:"",senha:""})
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({messsage:""});

  const changePasswordView = () =>{
   
      setShowPassword(!showPassword);
  }

  const handlechangeValue = (e) => {
    setProfileData({...profileData, [e.target.name]: e.target.value});
  }

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(profileData);
  }


  return (<>
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.formulario}>
        <Box className={classes.box}>
          <Typography variant="h5">
            Para verificar os seus restaurantes <br />
            Preferidos, acesse abaixo:
          </Typography>
          <InputForm label="Email" error={error.message} name="email" type="email" value={profileData.email} onChange={handlechangeValue} variant="outlined" className={classes.formControl} />
          <InputForm label="Senha" error={error.message} name="senha" isPassword="true" type={showPassword?"text":"password"} value={profileData.senha} handlerClickIcon={changePasswordView} onChange={handlechangeValue} showPassword={showPassword}  variant="outlined" className={classes.formControl} />
          <Typography component={Link} to="/" color="primary" className={classes.EsqueciSenhaButton}>
            Esqueci minha senha
          </Typography>
          <Button variant="contained" color="primary" onClick={submitLogin}  className={classes.btnLogar}>Logar</Button>
          <Typography>ou</Typography>
          <Button component={Link} to="/cadastrar" variant="contained" color="secondary" className={classes.Cadastrar}>Cadastrar</Button>
        </Box>
      </Grid>
      <Hidden mdDown>
        <Grid item md={6} lg={6}>
          <img src={BgImg} className={classes.bg} />
        </Grid>
      </Hidden>
    </Grid>
  </>);
}

export default Home;