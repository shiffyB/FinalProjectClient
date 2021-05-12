import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox,FormControl,FormLabel,RadioGroup,Radio} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Product from './Product';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ApplyProduct() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Product></Product>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            label="choose amount"
            name="amount"
            autoComplete="amount"
            type="number"
            autoFocus
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="E-mail"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="What's up"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="SMS"
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Choose frequency of updates</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" 
            // value={value} onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Update me only when the product has reached 100%" />
              <FormControlLabel value="male" control={<Radio />} label="Notify me of updates to this product" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Apply for product
          </Button>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
