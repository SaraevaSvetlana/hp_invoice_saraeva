import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { UlWrapper} from "../styles/MenuStyles";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const AccButton = () => {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
        <React.Fragment key='top'>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={toggleDrawer(true)}
            > <MenuIcon/> </IconButton>
            <Drawer
                anchor='top'
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>

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

                    </List>
                </Box>
            </Drawer>
        </React.Fragment>

    );
};


export default AccButton;
