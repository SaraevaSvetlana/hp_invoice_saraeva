import React from 'react';
import Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Package from "./Package";
import {style} from "../styles/ButtonsModalStyles";
import AddIcon from "@mui/icons-material/Add";
import {useToggle} from "../hooks/useToggle";

const AddPackage = () => {
    const [open,setOpen] = useToggle(false);

    return (
        <div className='button1'>

            <Button
                onClick={setOpen}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            ><AddIcon/>   </Button>
    <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Package
                handleClose={setOpen}
            />
        </Box>
    </Modal>

</div>
)
    ;
};

export default AddPackage;