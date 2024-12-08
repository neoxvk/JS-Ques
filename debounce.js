const debounce = (fn, delay) => {
    let timeout;
    return((...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=> fn(...args),delay)
    })

}

const log = debounce(()=> console.log("Debounces12"), 1000);
log();