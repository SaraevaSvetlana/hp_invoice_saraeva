import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";


const TableUn = ({head,body}) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow key = {'trIn'}>
                            { head.map((item,index)=>
                                <TableCell key = {`tcIn${index}`}>{item}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body.map((row, index) => {
                            return (
                                <TableRow key = {`trIn${index}`}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {row.map((itemRow,indexRow)=>
                                        <TableCell key = {`trcell${indexRow}`}>{itemRow}</TableCell>
                                    )}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableUn;