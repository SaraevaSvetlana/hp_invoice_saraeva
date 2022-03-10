import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccButton from "./AccButton";


const Menu = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                        <div sx={{backgroundColor: '#1976d2'}} >
                            <AccButton/>
                        </div>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Mail Delivery Service
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menu;