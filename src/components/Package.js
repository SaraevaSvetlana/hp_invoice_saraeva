import React, {useContext, useRef, useState} from 'react';
import {Avatar, Grid} from "@mui/material";
import {StyledGrid, StyledPaper} from "../styles/RegistrationStyles";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {CustomerContext, PackageContext} from "../App";

const Package = ({handleClose}) => {


    const [customers] = useContext(CustomerContext);
    const [packages, setPackages] = useContext(PackageContext);
    const weightRef = useRef(0);
    const priceRef = useRef(0);
    const customeridRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const custid = customers.findIndex(item => item.id == customeridRef.current.value);
        const packMax = packages.map((item) => item.customerid);
        if (custid >= 0 && weightRef.current.value > 0 && priceRef.current.value > 0) {
            const newPackage = {
                "id": `pak${packages.length + 1}`,
                "weight": `${weightRef.current.value}kg`,
                "customerid": +customeridRef.current.value,
                "price": `${priceRef.current.value}`,
                "shippingOrder": `${Math.max(...packMax) + 1}`
            }
            const newPackages = [...packages];
            newPackages.push(newPackage);
            setPackages(newPackages);
        }
        handleClose();
    }

    return (
        <>
            <Grid>
                <StyledPaper elevation={24}>
                    <StyledGrid>
                        <Avatar>
                            <AddIcon/>
                        </Avatar>
                        <h1>Package</h1>
                    </StyledGrid>
                    <form onSubmit={handleSubmit}>
                        <StyledGrid>
                            <label htmlFor="text">Customerid</label>
                            <input
                                ref={customeridRef}
                                type='text'
                            />
                        </StyledGrid>

                        <StyledGrid>
                            <label htmlFor="text">Weight</label>
                            <input
                                ref={weightRef}
                                type='text'
                            />
                        </StyledGrid>
                        <StyledGrid>
                            <label htmlFor="text">Price</label>
                            <input
                                ref={priceRef}
                                type='text'
                            />
                        </StyledGrid>

                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >Add package</Button>
                    </form>
                </StyledPaper>
            </Grid>
        </>
    );
};

export default Package;