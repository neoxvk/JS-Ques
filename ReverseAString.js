const reverse = (str) => {
    //Let's reverse it by built in
    let tmpString = str.split("").reverse().join("")
    //console.log(tmpString)

    //Without built in funcs

    let tmp = "";
    for(let i=str.length-1; i>=0; i--){
        tmp += str[i]

    }
    console.log("Reversed", str, "to", tmp)

}

reverse("vivek")