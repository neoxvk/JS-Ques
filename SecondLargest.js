const secondLargest = (tmpArray) => {
    let first = 0;
    let second = 0;

    for(let num of tmpArray){
        if(num > first){
            second = first;
            first = num;
           
        }else if(num > second && num !== first){
            second = num
            
        }
    }
    return second;

}

const result = secondLargest([1,4,67,22,45,22,2, 123]);
console.log(result)