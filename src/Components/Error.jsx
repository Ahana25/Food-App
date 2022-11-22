import React from 'react'
import error from '../Images/error.png'
import { makeStyles } from '@material-ui/styles'

let useStyles= makeStyles(
    {
        imgwidth:
        {
            width:"50%",
            margin:"120px 0 0 310px"
        }
    }
)

function Error() {
    let classes=useStyles();
    return (
        <div>
            <img src={error} alt="Error" className={classes.imgwidth}/>
        </div>
    )
}

export default Error
