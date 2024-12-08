const missing = (arr, size) => {
    const expected = (size * (size+1))/2;
    const actual = arr.reduce((acc, curr)=> acc + curr, 0)

    return expected - actual
    

}
console.log(missing([1,2,3,5],5));
