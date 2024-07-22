
let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt"

// .then() is a function that creates a PROMISE
// a PROMOISE contains a function that will execute when certain actions finished
// axios.get() will take a few miniseconds to finish
// so we use .then to tell JS -- when axios.get finishes, THEN
// execute the function passed to it
// SINCE axios.get() will require a few milliseconds, JS will
// move on to the next instruction.
axios.get(url).then(function(response){
    // the response from axios.get is only available inside this promise function
    document.querySelector("#output").innerHTML = response.data;
});
console.log("a");
console.log("b");
console.log("c");
// this behaviour is known as asynchronous execution
// the async behaviour only happens that require more than a few processes
