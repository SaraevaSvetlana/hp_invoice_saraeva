import React, {useContext} from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import {Link} from "react-router-dom";
import {CounterInvoiceContext, CustomerContext, UserContext} from "../App";

const CustomerList = () => {
    const [customers] = useContext(CustomerContext);
    const [user,setUser] = useContext(UserContext);
    const [counterInvoice, setCounterInvoice] = useContext(CounterInvoiceContext);
    const handleCreateInvoice = (id, name) => {
        const userName = {id, name};
        setUser(userName);
        setCounterInvoice(counterInvoice + 1);
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((row, index) => {
                            return (
                                <TableRow key={`trIn${index}`}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row"> {row.id} </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell><Button
                                        key={`btIn${index}`}
                                        variant="contained"
                                        onClick={() => {
                                            handleCreateInvoice(row.id, row.name)
                                        }}
                                    >
                                        <Link key={`crIn${index}`} to="/invoice">Create invoice</Link>
                                    </Button></TableCell>
                                    <TableCell><Button
                                        variant="contained"
                                    >Delete</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CustomerList;