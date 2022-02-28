import React, {useState, useEffect, createContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import CustomerListPage from "./pages/CustomerListPage";
import PackageListPage from "./pages/PackageListPage";
import InvoicePage from "./pages/InvoicePage";
import {UseFetchData} from "./hooks/useFetchData";
import ListInvoicePage from "./pages/ListInvoicePage";

export const UserContext = createContext();
export const CustomerContext = createContext();
export const PackageContext = createContext();
export const CounterInvoiceContext = createContext();

function App() {

    // const [customers,packages] = UseFetchData("../data.json");
    const [user, setUser] = useState({id: 0, name: 'Sveta'});
    const [customers, setCustomers] = useState([]);
    const [packages, setPackages] = useState([]);
    const [counterInvoice, setCounterInvoice] = useState(0);

    useEffect(() => {
        fetch("/data.json").then(response => response.json())
            .then(data => {
                setCustomers(data.customers);
                data.packages.sort((a,b) => a.shippingOrder-b.shippingOrder);
                setPackages(data.packages);
            });

    }, [])


    return (
        <UserContext.Provider value={[user, setUser]}>
            <CustomerContext.Provider value={[customers, setCustomers]}>
                <PackageContext.Provider value={[packages, setPackages]}>
                    <CounterInvoiceContext.Provider value={[counterInvoice, setCounterInvoice]}>

                        <div className="App">
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={CustomerListPage}/>
                                    <Route exact path="/package" component={PackageListPage}/>
                                    <Route exact path="/invoice" component={InvoicePage}/>
                                    <Route exact path="/listInvoice" component={ListInvoicePage}/>
                                </Switch>
                            </Router>
                        </div>
                    </CounterInvoiceContext.Provider>
                </PackageContext.Provider>
            </CustomerContext.Provider>
        </UserContext.Provider>

    );
}

export default App;
