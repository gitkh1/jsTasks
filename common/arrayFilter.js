const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => { 
    return (num % 2 == 0); 
};

filterArray = (arrayToFilter, filterFn) => {
    const arrayFiltered = [];

    arrayToFilter.forEach(element => {
        if (filterFn(element)) {
            arrayFiltered.push(element);
        }
    });
    
    return arrayFiltered;
}

console.log(filterArray(mixedArray, isEven));