import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/styles';



let useStyles= makeStyles(
    {
        head:
        {
            textAlign:"center",
            margin:"90px 0 0 40px"
        }
    }
)

function Home() {
    let classes= useStyles();
    return (
        <div>
            <Navbar/>
            <h2 className={classes.head}>Welcome to the Shopping Cart!</h2>
        </div>
    )
}

export default Home
