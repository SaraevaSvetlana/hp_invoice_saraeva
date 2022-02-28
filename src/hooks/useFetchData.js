import React, {useEffect, useState} from 'react';


 function useFetchData  (url) {
    const [customers, setCustomers] = useState( []);
    const [packages, setPackages] = useState([]);


    useEffect(()=>{
        fetch(url).then(response => response.json())
            .then(data => {

                setCustomers(data.customers);
                setPackages(data.packages)
                console.log(data.customers);
                console.log(data.packages);
            });

    },[])
    return{
        customers,
        packages,
    };
};
export { useFetchData };

