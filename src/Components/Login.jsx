import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

let useStyles=makeStyles({
    form:
    {
        width:"60%",
        margin:"230px"
    }
})

function Login() {
    let history= useHistory();
    let classes= useStyles();
    let moveHome=()=>
    {
        history.push('/home')
    }
    return (
        <div>
        <FormGroup className={classes.form}>
        <FormControl>
  <InputLabel htmlFor="my-input">UserName</InputLabel>
  <Input />
</FormControl>
        <FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input type="password"/>
</FormControl>

<Button variant="contained" color="secondary" onClick={moveHome}>
  Login
</Button>
</FormGroup>
<Typography><a href='./register'>New User? Register here today!</a></Typography>
        </div>
    )
}

export default Login
