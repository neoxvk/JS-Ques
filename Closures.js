const closure = () => {
    let count = 0;
    return (()=> {
        count++;
        console.log(count)
    })

}
let counter = closure()
counter();
counter();
counter();