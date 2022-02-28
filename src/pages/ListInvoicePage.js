import React, {useContext, useMemo} from 'react';
import {CustomerContext, PackageContext} from "../App";
import TableUn from "../components/TableUn";
import {useTotalInf} from "../hooks/useTotalInf";
import Menu from "../components/Menu";

const ListInvoicePage = () => {
    const [memoizedbody] = useTotalInf();


    return (
        <>
            <Menu/>
            <TableUn
                head = {['Name', 'ID','Total weight','TotalPrice']}
                body = {memoizedbody}
            />
        </>
    );
};

export default ListInvoicePage;