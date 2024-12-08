const findDuplicate = (arr) => {
    let nums = []
    let duplicate = 0
    for(let i=0; i<arr.length; i++){
        if(nums.includes(arr[i])){
            duplicate = arr[i]
        }else{
            nums.push(arr[i])
        }
    }

    return duplicate

}
console.log(findDuplicate([1,2,3,4,5,6,5]));



let usingMap = ()=> {
    let nums = [1,1,3,4,6];
    let repeated = new Set();

    for(let num of nums){
        if(repeated.has(num)){
            return num;
        }
        repeated.add(num)
    }
    return null;

}

console.log("UsingMAp", usingMap())