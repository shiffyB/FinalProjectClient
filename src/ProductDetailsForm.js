///פורם למילוי של פרטי המוצר

import React ,{useEffect,useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import { Radio ,FormLabel, RadioGroup} from '@material-ui/core';

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

export default function ProductDetailsForm() {
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
            Add new Product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
                onBlur={e=>changeDetails('productName',e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="lname"
                onBlur={e=>changeDetails('price',e.target.value)}
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
                name="company"
                label="company"
                type="company"
                id="company"
                // autoComplete="current-password"
                onBlur={e=>changeDetails('company',e.target.value)}

              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="price"
                type="price"
                id="price"
                // autoComplete="current-password"
                onBlur={e=>changeDetails('firstName',e.target.value)}

              />
            </Grid> */}
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
