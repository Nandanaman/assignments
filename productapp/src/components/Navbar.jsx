import { AppBar, Button, Icon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Navbar = () => {
  return (
    <div class='nav'>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h5'>Product App</Typography>
                <Link to='/h'>
                <Button variant='contained' class='b1'><HomeIcon/></Button>
                </Link>
                <Link to='/p'>
                <Button variant='contained' class='b2'><ProductionQuantityLimitsIcon/></Button>
                </Link>
                
            </Toolbar>
            
        </AppBar>
        <h1>welcome to Product App</h1>
        
        
        <br/><br/>

    </div>
  )
}

export default Navbar