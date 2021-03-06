import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthProvider';
import { Box, Button, Link, TextField, Typography } from '@material-ui/core/';
import { useStyles } from '../../hooks/styles-hooks';

const AuthForm = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { user, signUp, signIn } = useAuth();

  const [loginSignup, setLoginSignup] = useState('login');
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // this won't work for logout because there will always be a user
    if (user) {
      handleClose();
    }
  }, [user, handleClose]);

  const onSubmit = async (data) => {
    if (loginSignup === 'signup') {
      const { error } = await signUp({
        email: data.email,
        password: data.password,
      });
      if (error) {
        setAuthError(error.message);
      }
    }
    if (loginSignup === 'login') {
      const { error } = await signIn({
        email: data.email,
        password: data.password,
      });
      if (error) {
        setAuthError(error.message);
      }
    }
  };

  const onChange = () => {
    setAuthError(null);
    loginSignup === 'signup'
      ? setLoginSignup('login')
      : setLoginSignup('signup');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: 'Email required' }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{
          required: 'Password required',
          minLength: {
            value: 6,
            message: 'Password should be as least 6 characters',
          },
        }}
      />
      <Box py={1}>
        <Typography>
          {loginSignup === 'signup' ? (
            <>
              Already have an account?{' '}
              <Link onClick={onChange} className={classes.link}>
                Login
              </Link>
            </>
          ) : (
            <>
              Don't have an account yet?{' '}
              <Link onClick={onChange} className={classes.link}>
                Sign up
              </Link>
            </>
          )}
        </Typography>
      </Box>
      {authError && <Typography color="error">{authError}</Typography>}
      <div>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {loginSignup === 'signup' ? 'Sign up' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
