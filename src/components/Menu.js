import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {useToggle} from "../hooks/useToggle";
import { MenuSt, UlWrapper} from "../styles/MenuStyles";


const Menu = () => {
    const [isVisible, toggleIsVisible] = useToggle(false);


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleIsVisible}
                    >
                        {isVisible ? (
                            <MenuSt>
                                <nav>
                                    <UlWrapper>
                                        <liWrapper>
                                            <Link to="/">Customers</Link>
                                        </liWrapper>
                                        <liWrapper>
                                            <Link to="/package">Packages</Link>
                                        </liWrapper>
                                        <liWrapper>
                                            <Link to="/listInvoice">Invoices</Link>
                                        </liWrapper>
                                    </UlWrapper>
                                </nav>
                            </MenuSt>

                        ):( <MenuIcon/>)
                        }

                    </IconButton>


                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Mail Delivery Service
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menu;