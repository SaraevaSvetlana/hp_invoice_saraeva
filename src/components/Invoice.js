import React, {useContext} from 'react';
import GridTable from "./GridTable";
import {CounterInvoiceContext, PackageContext, UserContext} from "../App";
import {FooterStyles, GridWrapper, TitleBoxWrapper, TitleWrapper} from "../styles/GridStylesWrapper";
import {functionSumPrice} from "../hooks/functionSumPrice";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const Invoice = () => {

    const [user] = useContext(UserContext);
    const [packages] = useContext(PackageContext);
    const [counterInvoice] = useContext(CounterInvoiceContext);
    const {
        listPackages,
        sum,
        totalWeight,
        date
    } = functionSumPrice(user.id, packages);

    return (
        <GridWrapper>
            <Button
                variant="contained"
            >
                <Link key={`crIn12`} to="/">Return</Link>
            </Button>
            <TitleWrapper>
                <TitleBoxWrapper>
                    <h2>Invoice</h2>
                    <p>No. {counterInvoice}</p>
                </TitleBoxWrapper>
                <TitleBoxWrapper>
                    <p> {date}</p>
                    <p> {user.name? user.name: ''} </p>
                </TitleBoxWrapper>

            </TitleWrapper>
            <GridTable
                key = {`grid`}
                config={['ID', 'Weight', 'Price']}
                data={listPackages}
                footer={['', `${totalWeight}kg`, `Total ${sum}`]}
            />
            <FooterStyles>
                <p>You recieved {listPackages.length} packages</p>
                <p>Thank you for using our services</p>
            </FooterStyles>

        </GridWrapper>
    );
};

export default Invoice;
