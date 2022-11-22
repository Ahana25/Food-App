import React, { useState } from 'react'
import Navbar from './Navbar'
import {food} from '../Database/Food'
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography } from '@material-ui/core';
import { postData } from '../Service/Api';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
   
    root: {
      maxWidth: 235,
      margin:"40px",
      display:"inline-block"
      
    },
    media: {
      height: 240,
    },
  });
  
function AllFood() {
    let history=useHistory();
    let [users,setUsers]=useState({
      img:"",
      title:"",
      des:"",
      cost:""
    })

    let postAllData=async(users)=>
    {
      await postData(users);
    }

    let cartVal=(event)=> 
    {
        postAllData(users);
        setUsers({...users})
        history.push('/add')
    }
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            {food.map((list)=>
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
        <Button size="small" color="secondary" variant="contained" onClick={cartVal}>
          Add to Cart
        </Button>
        <h3>{list.cost}</h3> 
      </CardActions>
    </Card>
            )})}
        </div>
    )
}

export default AllFood
