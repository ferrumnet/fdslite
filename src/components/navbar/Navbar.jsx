import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    {
        title:"GitHub", path:"#"
    },
    {
        title:"Whitepaper", path:"#1"
    },
    {
        title:"Ferrum Website", path:"#2"
    },
]

 export default function Navbar(){
    const [open,setOpen] = useState(false)

    return (
        <>

        <AppBar sx={{bgcolor:'#1A1D1F', color:'#fff'}} position="static">
            <Toolbar>
                <IconButton 
                color="inherit" 
                onClick={() => setOpen(true)}
                sx={{ display: { xs:"flex", sm:"none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography sx={{flexGrow: 1}}>LOGO FERRUM</Typography>
                
                <Box sx={{ display: { xs:"none", sm:"flex" } }}>
                {
                navLinks.map(item => (
                <Button color="inherit" key={item.title} component="a" href={item.path}>{item.title}</Button>
                ))
                }
                </Box>

            </Toolbar>
        </AppBar>


        <Drawer 
        open={open} 
        anchor="left" 
        onClose={() => setOpen(false)}
        sx={{ display: { xs:"flex", sm:"none" } }}
        >
        <NavListDrawer navLinks={navLinks}/>
        </Drawer>
        
        </>
    )
 }