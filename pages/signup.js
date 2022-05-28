import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import logo from '/images/scrum2.png'
import bg from '/images/scrum3.png'
import { fontSize, fontWeight, width } from '@mui/system';
import styles from '/components/addProject/AddProject.module.css'

const theme = createTheme();

export default function SignUp() {

    const stylingform = {
        margin: "20px"
    }  
    const btnstyling = {
        margin: "20px",
        height: "60px",
        color: "white",
        backgroundColor: "#00204A"
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <header className='navbarHeader'>
        <nav className='nav'>
                <div className='logo'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width="40px"
                        height="40px"
                    />
                    <div> <h1 className='logotext'> Extensively Scrum </h1> </div>
                </div>
        </nav>
    </header>  
      <Grid container component="main" sx={{ height: '93vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
            sx = {{
                width: "50%",
            }}>
          <Box
            sx={{
              paddingTop: "60px",
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#ED6400', width: "100px", height: "100px",  }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" 
                sx={{ margin: "0",
                fontFamily: "cursive",
                fontWeight: "bolder", 
                fontSize: "3.5rem",
                letterSpacing: "0.1em" }} >
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                style= {stylingform}
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Enter your fullname"
                name="fullname"
                autoComplete="fullname"
                autoFocus
              />
              <TextField
                style= {stylingform}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                style= {stylingform}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter your password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                style= {stylingform}
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Confirm your password"
                type="password"
                id="password2"
                autoComplete="current-password"
              />
              <Button
                className={styles.Signinbtn}
                style = {btnstyling}
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container style= {stylingform}>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        > </Grid>
      </Grid>
    </ThemeProvider>
  );
}