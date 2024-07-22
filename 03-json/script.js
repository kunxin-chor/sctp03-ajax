async function loadData(){
    let response = await axios.get("data.json"); // if in the same diretory as index.html
    console.log(response.data);
    document.querySelector("#title").innerHTML = response.data.book;
    document.querySelector("#author").innerHTML = response.data.author;

    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `
        <h1>${response.data.book}</h1>
        <h2>By ${response.data.author}</h2>
        <ul>
        <li>Number of Pages: ${response.data.pages}</li>
        <li>Borrowed:${response.data.borrowed}</li>

        </ul>
    
    `

}
loadData();