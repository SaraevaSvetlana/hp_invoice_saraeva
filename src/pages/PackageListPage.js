import React, {useContext} from 'react';
import Menu from "../components/Menu";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CustomerContext, PackageContext} from "../App";
import AddPackage from "../components/AddPackage";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import i from "styled-components/dist/styled-components-macro.esm";
import {useArrow} from "../hooks/useArrow";

const PackageListPage = () => {
    const [packages] = useContext(PackageContext);
    const [customers] = useContext(CustomerContext);
    const [handleChangeShippingOrder] = useArrow();

    return (
        <>
            <Menu/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Price</TableCell>

                            <TableCell>
                                    <AddPackage/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packages.map((row, index) => {
                            return (
                                <TableRow
                                    key={`trp${index}`}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {customers.find(item => item.id === row.customerid).name}
                                    </TableCell>
                                    <TableCell>{row.weight}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>
                                        <Button variant="contained">Delete</Button>
                                        <i>
                                            {index ? <Button variant="contained"
                                                    onClick={() => handleChangeShippingOrder (1, index)}
                                            ><ArrowUpwardIcon/></Button>: ''}
                                            {index !== packages.length-1 ?  <Button variant="contained"
                                                    onClick={() =>handleChangeShippingOrder (-1, index)}
                                            ><ArrowDownwardIcon/></Button>: ''}
                                        </i>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
};

export default PackageListPage;
