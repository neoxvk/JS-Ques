


const removeDuplicates = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5,9,8];
    const tmp = new Set(arr);
    console.log([...tmp])

    return [...new Set(arr)]

}
console.log(removeDuplicates());