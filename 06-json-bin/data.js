const JSON_BIN_BASE_URL="https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66a0feb1e41b4d34e41671ed";    



// data part
let books = [];
function addBook(books, title, author) {
   let book = {
   "id": Math.floor(Math.random() * 10000 + 1), 
    "title": title,
   "author": author
   }
   // title cannot be empty and author cannot be empty
   if (title == "" || author =="") {
   alert("Please provide a title or an author"); 
   // terminate the function
   return; 
   }

   books.push(book);
}

function editBook(books, bookid, title, author) {
  // use a linear search to find the book
  let bookToEdit = null;
  for (let b of books) {
    if (b.id === bookid) {
     bookToEdit = b;
    break;
    }
  }
 
  bookToEdit.title = title;
  bookToEdit.author = author;
}

function deleteBook(books, bookid) {
  // find the index of the book to delete
  let indexToDelete = null;
  let index = -1; // start from -1 because the first element to 0
  
  for (let b of books) {
    index = index + 1;
    if (b.id == bookid) {
      indexToDelete = index;
      break;
    }
  }

  books.splice(indexToDelete, 1);
  
}

async function loadBooks() {
    const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`);
    return response.data.record;
}

async function saveBooks(books) {
    const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}`, books);
    console.log(response.data);

}