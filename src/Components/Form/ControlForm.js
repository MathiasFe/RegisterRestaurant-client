import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const FormCustom =(props) => {
  return(
    <>  
      <TextField 
        error={props.error}
        label={props.label}
        value={props.value}
        helperText={props.errorText}
        variant={props.variant}
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        name={props.name}
        InputProps={
          props.isPassword &&
          { 
            endAdornment: (
            <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.handlerClickIcon}
              edge="end"
            >
              {props.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
          ),
        }}
      />
    </>
  );
}

export default FormCustom;