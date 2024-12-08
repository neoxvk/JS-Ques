//Write a function to merge two arrays and remove duplicate values

const merge = (arr1, arr2) => {
    return new Set([...arr1, ...arr2])
   

}

const result = merge([1,2,3,4], [1,4,6,7]);
console.log(result)
