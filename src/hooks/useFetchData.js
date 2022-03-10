import React, {useEffect, useState} from 'react';


 function useFetchData  (url) {
     const [user, setUser] = useState({id: 0, name: ''});
     const [customers, setCustomers] = useState([]);
     const [packages, setPackages] = useState([]);
     const [counterInvoice, setCounterInvoice] = useState(0);

     useEffect(() => {
         fetch(url).then(response => response.json())
             .then(data => {
                 setCustomers(data.customers);
                 data.packages.sort((a,b) => a.shippingOrder-b.shippingOrder);
                 setPackages(data.packages);
             });

     }, [])

     return{
         user,
         setUser,
        customers,
         setCustomers,
        packages,
         setPackages,
         counterInvoice,
         setCounterInvoice
    };
};
export { useFetchData };

