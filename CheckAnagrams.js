const anagrams = (str1, str2) => {
    let tmp1 = str1.split("").sort().join("");
    let tmp2 = str2.split("").sort().join("");

    return tmp1 === tmp2 ? "Anagram" : "Not Anagram"

}
;
console.log(anagrams("panama", "napama"));

console.log(anagrams("panamavavav", "gaganapama"));