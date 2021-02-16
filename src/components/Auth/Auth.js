import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LockOutlined } from '@material-ui/icons';
import Icon from './icon';
import Input from './Input';
import useStyles from './styles';
import { authActionTypes } from 'redux/actions';
import { signin, signup } from 'redux/actions/auth';

const Auth = ({ formType = 'signin' }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormDate = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formData, setFormData] = useState(initialFormDate);

  const handleSubmit = e => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSuccess = async res => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: authActionTypes.AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleFailure = error => {
    console.log(error);
    console.log('Google Sign In failure');
  };

  const [isSignup, setIsSignup] = useState(formType === 'signup');

  const title = isSignup ? 'Sign up' : 'Sign in';

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{title}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item container spacing={2}>
              {isSignup && (
                <>
                  <Input label="First Name" handleChange={handleChange} half />
                  <Input label="Last Name" handleChange={handleChange} half />
                </>
              )}
            </Grid>
            <Input label="Email" handleChange={handleChange} type="email" />
            <Input
              label="Password"
              handleChange={handleChange}
              type="password"
            />
            {isSignup && (
              <Input
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {title}
              </Button>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_ID}
                render={renderProps => (
                  <Button
                    className={classes.googleButton}
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon />}
                    variant="contained"
                  >
                    Google Sign In
                  </Button>
                )}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy="single_host_origin"
              />
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={() => setIsSignup(prevState => !prevState)}>
                  {!isSignup ? 'Sign up' : 'Sign in'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

Auth.propTypes = {};

export default Auth;
