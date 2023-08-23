import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

const Login = () => {
  const theme = useTheme();
  const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));

  const signin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('LOGIN HAD UNDER CLICKED');
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '95vh' }}>
        <Paper
          elevation={6}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '40vh',
            height: '40vh',
            borderColor: 'black',
            padding: isSmOrDown ? '16px' : '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Username"></TextField>
            <TextField label="Password" type={'password'}></TextField>
            <Button onClick={signin}>login</Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
