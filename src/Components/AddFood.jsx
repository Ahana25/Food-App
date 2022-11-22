import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {deleteData, getData} from '../Service/Api'
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography } from '@material-ui/core';


const useStyles = makeStyles({
   
    root: {
      maxWidth: 235,
      margin:"40px",
      display:"inline-block"
      
    },
    media: {
      height: 240,
    },
    btn:
    {
        margin:"1px",
        padding:"1px"
    },
    count:
    {
        textAlign:"center"
    }
  });

function AddFood() {
    let[count,setCount]=useState(0);
    let upCount=()=>
    {
        setCount(count+1);
    }
    let downCount=()=>
    {
        setCount(count-1);
    }
    const classes = useStyles();
    let [users,setUsers]=useState([]);

    let getAllData=async()=>
    {
        let res= await getData();
        setUsers(res.data);
    }
    useEffect(()=>
    {
       getAllData();
    },[])

 let deleteAllData=async(id)=>
{
     await deleteData(id)
     getAllData();
}

    return (
        <div>
            <Navbar/>
    {users.map((list)=>
    {
        return(
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={list.img}
          title={list.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {list.des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="contained" onClick={()=>deleteAllData(list.id)}>
          Delete Item
        </Button>
        <Typography>{list.cost}</Typography>
        <Typography>
        <Button variant="contained" color="primary" className={classes.btn} onClick={()=>upCount}>+</Button>
        <Typography className={classes.count}>{count}</Typography>
        <Button variant="contained" color="primary" className={classes.btn} onClick={()=>downCount}>-</Button>
        </Typography>
        
      </CardActions>
    </Card>

        )
    })}

        </div>
    )
}

export default AddFood
