async function loadData() {
  let response = await axios.get("data.json"); // if in the same diretory as index.html
  return response.data;
}

// the data is supposed to be an object representing the book
// Keys it must have:
// "book": the title of the book
// etc.
function renderData(book) {
  document.querySelector("#title").innerHTML = book.book;
  document.querySelector("#author").innerHTML =book.author;

  let outputDiv = document.querySelector("#output");
  outputDiv.innerHTML = `
        <h1>${book.book}</h1>
        <h2>By ${book.author}</h2>
        <ul>
        <li>Number of Pages: ${book.pages}</li>
        <li>Borrowed:${book.borrowed}</li>

        </ul>
    
    `;
}

async function main() {
    let book = await loadData();
    renderData(book);
}

main();