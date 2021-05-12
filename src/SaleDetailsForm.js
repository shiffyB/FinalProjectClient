///פורם למילוי של פרטי המבצע

import React ,{useEffect,useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import { Radio ,FormLabel, RadioGroup,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUpload from "./ImageUpload";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SaleDetailsForm() {
  const classes = useStyles();
    const [productDetails,setProductDetails]=useState({})
    const changeDetails=(key,val)=>{
        let copyDetails=productDetails;
        copyDetails[key]=val;
        setProductDetails(copyDetails);
        console.log(productDetails)
    }
    function AddProductToDB(event) {
        event.preventDefault();
        console.log(productDetails);
    }
  
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
            Add new Sale
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="saleName"
                variant="outlined"
                required
                fullWidth
                id="saleName"
                label="Sale Name"
                autoFocus
                onBlur={e=>changeDetails('saleName',e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="store"
                label="Store"
                name="store"
                autoComplete="store"
                onBlur={e=>changeDetails('store',e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="branch"
                label="branch"
                type="branch"
                id="branch"
                // autoComplete="current-password"
                onBlur={e=>changeDetails('branch',e.target.value)}
              />
            </Grid>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Grid item xs={12}>
                <FormLabel component="legend">Split type</FormLabel>
                <RadioGroup aria-label="quiz" name="quiz" 
                // value={value} onChange={handleRadioChange}
                >
                <FormControlLabel value="best" control={<Radio />} label="units" />
                <FormControlLabel value="worst" control={<Radio />} label="weight" />
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="amount"
                label="amount"
                type="number"
                id="amount"
                // autoComplete="current-password"
                onBlur={e=>changeDetails('amount',e.target.value)}

              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="amount"
                label="amount"
                type="number"
                id="amount"
                // autoComplete="current-password"
              />
            <ImageUpload cardName="Input Image" 
            // imageGallery={galleryImageList} 
            />,
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="link"
                label="link"
                type="link"
                id="link"
                // autoComplete="current-password"
                onBlur={e=>changeDetails('link',e.target.value)}

              />
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e=> AddProductToDB(e)}
          >
            Add Item
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
