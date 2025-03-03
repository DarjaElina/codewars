function findNb(m) {
    let res = 0;
    let i = 1;
    while (res !== m && res <= m) {
        res += i ** 3;
        i++;
    }
    if (res !== m)
        return -1;
    return i - 1;
}

console.log(findNb(91716553919377));



