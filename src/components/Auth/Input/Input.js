import React, { useState } from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Input = ({ handleChange, label, half = false, type }) => {
  let name = label.split(' ');
  name[0] = name[0].toLowerCase();
  name = name.join('');

  const [showPassword, setShowPassword] = useState(true);

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        type={
          type === 'password' ? (showPassword ? 'password' : 'text') : 'text'
        }
        autoFocus
        xs={6}
        InputProps={
          type === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(prevState => !prevState)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>{' '}
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

Input.propTypes = {};

export default Input;
