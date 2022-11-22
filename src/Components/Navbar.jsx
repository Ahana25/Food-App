import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

let useStyles= makeStyles(
    {
        link:
        {
            margin:"20px",
            textDecoration:"none",
            fontSize:"20px",
            color:"white"
        }
    }
)

function Navbar() {
    let classes=useStyles();
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
        </div>
    )
}

export default Navbar
