let largest = () => {
    //using Math,max
    let tmpArray = [1,2,3,56,78,9];
    let largest = Math.max(...tmpArray)
    console.log(largest)


    //Without using Math.max;
    let biggest = 0;
    for(num of tmpArray){
        if (num > biggest) {
          biggest = num;
        }
    }
    console.log("Biggest is:", biggest)
}
largest()