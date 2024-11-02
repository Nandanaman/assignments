import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './homepage.css'

const Homepage = () => {
  var[val,setval]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((product)=>{
        setval(product.data)
        console.log(val);
    })
  },[])
  return (
      <div><br/><br/><br/><br/>
        <Grid container spacing={2}>
          {
            val.map((user)=>{
              return(
                <Grid item xs={12} sm={6} md={4}>

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={user.image}
       
      />
      <CardContent class='pro'>
        <Typography gutterBottom variant="h5" component="div" class='title'>
          {user.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }} class='pri'>
         {user.price}
        </Typography>
        <Typography variant="body5" sx={{ color: 'text.secondary' }}>
         {user.category}
        </Typography>

      </CardContent>
      <CardActions>
        <Button variant='contained'size="small">buy now</Button>
        <Button variant='contained' size="small">add to cart</Button>
      </CardActions>
    </Card>
    </Grid>
      )
    })
}
  </Grid>

    </div>
  )
}

export default Homepage