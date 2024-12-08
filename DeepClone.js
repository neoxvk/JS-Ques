const deepClone = (obj) => {
     let first = JSON.stringify(obj)
     let second = JSON.parse(first)
     console.log(second)
    return JSON.parse(JSON.stringify(obj));
   

}

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);