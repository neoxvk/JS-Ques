const checkPallindrome = (str) => {
    if(str[0] === str[str.length-1]){
        console.log("Acha beta")
    }

    let i =0;
    let j= str.length-1
    while(i < j){
        if(str[i] !== str[j]){
            return "Not Pallindrome"
    }else{
        i++;
        j--;
    }
    return "Pallindrome"

}
}
const result = checkPallindrome("viviv")
console.log(result);



//Another way Around....
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama"));
