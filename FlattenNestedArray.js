const flatten = (arr) => {
    return arr.reduce((acc, newVal) => {
        if(Array.isArray(newVal)){
                return acc.concat(flatten(newVal))

        }else{
           return acc.concat(newVal)
        }

    },[])
}

const result = flatten([1, [2, [3, [4]]]])
console.log(result)


const anotherFlatten = (arr) => {
    let tmpArray = []
    arr.forEach((newVal)=> {
        if(Array.isArray(newVal)){
            tmpArray.push(...flatten(newVal)) 
        }else{
            tmpArray.push(newVal)
        }
    })

    return tmpArray

}

const result1 = anotherFlatten([7, [2, [3, [4]]]]);
console.log(result1);