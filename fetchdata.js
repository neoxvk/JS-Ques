const fetchData = async(url) => {

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }catch(e){
        console.log("Issue in fetching")
    }
    
}

fetchData("https://jsonplaceholder.typicode.com/posts");

// Promise { <pending> }