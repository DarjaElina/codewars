function wave(str){
    const res = [];
    for (let i = 0; i < str.length; i++) {
       res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }

    return res;
}

console.log(wave("hello"));