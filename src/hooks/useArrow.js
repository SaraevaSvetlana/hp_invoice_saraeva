import React, {useContext, useEffect, useState} from 'react';
import {PackageContext} from "../App";


function useArrow (){
    const [packages, setPackages] = useContext(PackageContext);
    const [arrow,setArrow] = useState(0);
    const [indexArrow,setIndexArrow] = useState(0);

    useEffect (()=>{
        if(packages.length !==0 ){
            const newPackages = [...packages];
            let a = newPackages[indexArrow].shippingOrder;
            newPackages[indexArrow].shippingOrder = newPackages[indexArrow - arrow].shippingOrder;
            newPackages[indexArrow - arrow].shippingOrder = a;
            a = newPackages[indexArrow];
            newPackages[indexArrow] = newPackages[indexArrow - arrow];
            newPackages[indexArrow - arrow] = a;
            setPackages(newPackages);
        }
    }, [arrow, indexArrow]);
    const handleChangeShippingOrder = (num,index)=> {
        setIndexArrow(index);
        setArrow(num);
    }
    return [
        handleChangeShippingOrder
    ];
}
export {useArrow};

