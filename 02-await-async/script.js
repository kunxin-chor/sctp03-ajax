
let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt"

// to use await in a function, the function must begin async
async function loadData() {
    // when we put await in front of an async function,
    // we tell JS don't execute the next line until the async process finishes
    let response = await axios.get(url);  // axios.get() will return a Promise object
    console.log(response);
    console.log(response.data);
    return response.data;
}
loadData();
console.log("A");
console.log("B");
