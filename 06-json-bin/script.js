document.addEventListener("DOMContentLoaded", async function(){
  // the books here refer to the global books array
  books = await loadBooks();
  renderList();
});


// interaction part
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function(){
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  addBook(books, title, author);
  renderList();
});

let saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function(){
  saveBooks(books);
})

 function renderList() {
  // render the list
  let bookListDiv = document.querySelector("#bookList2");
  let outputString = "";
  console.log(books);
  for (let b of books) {
  // sample output:
  // `<li>The Lord of the Rings (JRR Tolkien)</li>`
  outputString += `<li>${b.title} (${b.author} ) 
    <button class="edit" data-bookid="${b.id}">Edit</button>
    <button class="delete" data-bookid="${b.id}">Delete</button>
  </li>`;
  }
  bookListDiv.innerHTML = outputString;
   // after we set the inner HTML, all the elements will be created 
   // all buttons will be created, so we use querySelectorAll on all of them
   
   // EDIT BUTTONS
   let allEditButtons =  document.querySelectorAll(".edit");
   for (let button of allEditButtons) {
    button.addEventListener("click", function(event) {
    // the first parameter for a function handling an event is the event info
    let clickedButton = event.target;
    let bookid = Number(clickedButton.dataset.bookid);
    let title = prompt("Enter the new title");
    let author = prompt("Enter the new author");
    editBook(books, bookid, title, author);
    renderList();

    });
   }

   // DELETE BUTTONS
   let allDeleteButtons = document.querySelectorAll(".delete");
   for (let button of allDeleteButtons) {
     button.addEventListener("click", function(event){
       // get the book id
       let bookid = Number(event.target.dataset.bookid);
       deleteBook(books, bookid);
       renderList();
     })
   }
  }

