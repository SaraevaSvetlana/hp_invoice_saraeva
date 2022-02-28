

 function functionSumPrice(id, packages) {


    const listPackages = id===0? []: packages.filter(item => item.customerid == id);
    const sum = id===0? 0 : listPackages.reduce((sum,item,) => item.price + sum, 0);
    const totalWeight = id===0? 0:listPackages.reduce((sum,item) => +item.weight.split('kg')[0]+sum, +0);
    const date = new Date().toDateString();


    return {
        listPackages,
        sum,
        totalWeight,
        date};
};
export { functionSumPrice };

