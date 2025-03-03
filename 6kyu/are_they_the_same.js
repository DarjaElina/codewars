function comp(array1, array2){
    if (!array1 || !array2)
        return false;
    const sortedArr1 = array1.sort((a, b) => a - b);
    const sortedArr2 = array2.sort((a, b) => a - b);
    return sortedArr1.length === sortedArr2.length && sortedArr1.every((item, index) => item ** 2 === sortedArr2[index]);
}

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [136, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b));