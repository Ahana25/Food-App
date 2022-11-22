import React from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';



let useStyles=makeStyles({
    form:
    {
        width:"60%",
        margin:"230px"
    }
})

function Register() {
    let history= useHistory();
    let classes= useStyles();
    let moveLogin=()=>
    {
        history.push('/')
    }
    return (
        <div>
            <FormGroup className={classes.form}>
        <FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input />
</FormControl>
        <FormControl>
  <InputLabel htmlFor="my-input">Userame</InputLabel>
  <Input />
</FormControl>
  <FormControl>
  <InputLabel htmlFor="my-input">Email</InputLabel>
  <Input />
</FormControl>
  <FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input type="password" />
</FormControl>

<Button variant="contained" color="secondary" onClick={moveLogin}>
 Register
</Button>
</FormGroup>
<Typography>
Already a registered user?
    <a href="/">Login now</a>
</Typography>
        </div>
    )
}

export default Register
