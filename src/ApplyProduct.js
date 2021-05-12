import React, { useContext } from 'react';
import {useParams } from 'react-router-dom'
import {productsContext} from './ProductsContext'


export default function ApplyProduct() {
  const cart=JSON.parse( localStorage.getItem('cart'));
let sum=cart.reduce((a,b)=>a+parseInt(b.Product.price*b.Amount),0)

  return (
      <div>
          <h1>סיכום הזמנה</h1>
          <h3>{`סכום לתשלום ${sum} ש"ח`}</h3>
            <h3>דמי משלוח 20 ש"ח</h3>
            <h3>{`סך הכל ${parseFloat( sum)+20.0}  ש"ח`}</h3>

            <form className={classes.root} noValidate autoComplete="off" style={{width: "700px"}}>
            <TextField id="standard-basic" label="שם מוצר" onChange={e=>setName(e.target.value)}/>
            <TextField id="standard-basic" label="מחיר"  onChange={e=>setPrice(e.target.value)}/>
            <FormControl disabled={state} className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={'babies'}>תינוקות</MenuItem>
          <MenuItem value={'hair'}>אביזרי שיער</MenuItem>
          <MenuItem value={'occasions'}>כלות ואירועים</MenuItem>
          <MenuItem value={'bags'}>תיקים</MenuItem>

        </Select> */}
      </FormControl>
      <br/>
            <Button variant="contained"  disabled={state} onClick={handleClick}> 
            הצטרף       </Button>
                {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
            המוצר נוסף בהצלחה        </Alert>
                </Snackbar> */}
        </form> 
      </div>
  );
}




// import React, { useContext ,useState} from 'react';
// import {useParams } from 'react-router-dom'
// import {productsContext} from './ProductsContext'
// import TextField from '@material-ui/core/TextField';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';



// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }


// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         // width: '25ch',
//         direction:'rtl',
//         textAlign:'right'
//       },
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//       },
//       selectEmpty: {
//         marginTop: theme.spacing(2),
//       },
//   }),
// );

// export default function Manage(props) {
// const productsST=useContext(productsContext);
// //!המורה-
// //!כאן הסיסמה :)
// const password = "1234"
// const classes = useStyles();
// const [open, setOpen] = useState(false);
// const [passVal, setPassVal] = useState(0);

// const [price, setPrice] = useState(0);
// const [name, setName] = useState('');
// const [state, setState] = useState(true);

// const handleClick = () => {
//     setOpen(true);
//     let id=productsST.products.length+1;
//     productsST.setProducts([...productsST.products,{
//     id:id,
//     name:name,
//     img:"noImage.png",
//     price:price,
//     category:category}])
// };


// const [category, setCategory] = useState('');
// const handleChange = (event) => {
//     setCategory(event.target.value);
//   };

// const handleClose = (event, reason) => {
//   if (reason === 'clickaway') {
//     return;
//   }
//   setOpen(false);
// };

// const checkPassword=()=>{
//     if (password===passVal)
//     {
//         setState(false)
//     }
//     else
//         setState(true)

// }

//   return (
//     <div>
//         <h3>הזן את הסיסמה:</h3>
//         <TextField id="standard-basic" label="סיסמה" onChange={e=>setPassVal(e.target.value)}/>
//         <br></br>
//         <Button variant="contained"  onClick={checkPassword} style={{margin:"20px",marginRight:"50px"}}>היכנס כמנהל</Button>

//         <form disabled={true} className={classes.root} noValidate autoComplete="off" style={{width: "700px"}}>
//             <TextField disabled={state} id="standard-basic" label="שם מוצר" onChange={e=>setName(e.target.value)}/>
//             <TextField disabled={state} id="standard-basic" label="מחיר"  onChange={e=>setPrice(e.target.value)}/>
//             <FormControl disabled={state} className={classes.formControl}>
//         <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={category}
//           onChange={handleChange}
//         >
//           <MenuItem value={'babies'}>תינוקות</MenuItem>
//           <MenuItem value={'hair'}>אביזרי שיער</MenuItem>
//           <MenuItem value={'occasions'}>כלות ואירועים</MenuItem>
//           <MenuItem value={'bags'}>תיקים</MenuItem>

//         </Select>
//       </FormControl>
//       <br/>
//             <Button variant="contained"  disabled={state} onClick={handleClick}> 
//             הוסף מוצר      </Button>
//                 <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                     <Alert onClose={handleClose} severity="success">
//             המוצר נוסף בהצלחה        </Alert>
//                 </Snackbar>
//         </form> 
//     </div>
//   );
// }
