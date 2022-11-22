import { AppBar, Button, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
let useStyles= makeStyles(
    {
        link:
        {
            margin:"20px",
            textDecoration:"none",
            fontSize:"20px",
            color:"white"
        },
        btn:
        {
            margin:"250px 0 0 550px"
        }
    }
)


function Logout() {
    let classes=useStyles();
    let history= useHistory();
    let moveLogin=()=>
    {
        alert('Are you sure you want to logout?');
        history.push('/')

    }
    return (
        <div>
    <AppBar position="static">
      <Toolbar>

      <NavLink exact to ='/home' className={classes.link}>Home</NavLink>
      <NavLink exact to ='/all' className={classes.link}>AllFoods</NavLink>
      <NavLink exact to ='/add' className={classes.link}>Your Cart</NavLink>
      <NavLink exact to='/logout' className={classes.link}>Logout</NavLink>  
  </Toolbar>
</AppBar>
            <Button variant="contained" color="secondary" onClick={moveLogin} className={classes.btn}>Click to logout</Button>
        </div>
    )
}

export default Logout
