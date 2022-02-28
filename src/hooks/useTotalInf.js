import {useContext, useMemo} from "react";
import {CustomerContext, PackageContext} from "../App";

function useTotalInf (){
    const [packages] = useContext(PackageContext);
    const [customers] = useContext(CustomerContext);

    const memoizedbody = useMemo(() => customers.map((item)=>{
        const element =[];
        element.push(item.name);
        element.push(item.id);
        element.push(packages.filter((i) => i.customerid === item.id).reduce((sum,j,) => j.price + sum, 0));
        element.push(packages.filter((i) => i.customerid === item.id).reduce((sum,j,) => +j.weight.split('kg')[0]+sum, 0));
        console.log(element);
        return element;
    }));

    return [memoizedbody];
}
export {useTotalInf};