// Straightforward Method
// async function loadData() {
//     // axios.get() -> return a Promise (that promise is fetching the data from the URL in the background)
//     // await the promose
//     const response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
//     // select the body element
//     const outputElement = document.querySelector('#output');
//     outputElement.innerHTML = response.data;
// }

// loadData();

async function loadData() {
    const response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
    // reminder: axios.get returns a promise (delayed function call that will return eventually)
    // await a promise -> return the result of the promise
    return response.data;
}

function renderData(data) {
    const outputElement = document.querySelector("#output");
    outputElement.innerHTML = data;
}

// DOMContentLoaded is an event that is fired by the browser when the HTML content has all been loaded
document.addEventListener("DOMContentLoaded", async function(){
    const data = await loadData();
    renderData(data);
})

