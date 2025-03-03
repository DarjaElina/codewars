function tribonacci(signature,n){
    if (n === 0)
        return [];
    for (let i = 0; i < n - 3; i++) {
      signature[i + 3] = signature.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0);
      
    }
    return signature.slice(0, n);
  }

console.log(tribonacci([1, 1, 1], 6))

