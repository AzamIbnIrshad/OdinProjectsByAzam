document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("bookDialog");
  const showButton = document.getElementById("addButton");
  const closeButton = document.getElementById("closeButton");
  let front = document.getElementById("front");
  let front2 = document.getElementById("front");
  let form = document.querySelector("form");
  let list = document.getElementById("list");
  let bookWrappers = document.querySelectorAll(".bookWrapper")
  console.log(bookWrappers[2]);
  let colorArray = ['red','blue','green','yellow','brown','orange']
  
  


  let myLibrary = [];
  console.log(myLibrary);

  function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });



  function addBookToShelf(e) {
    let book = document.createElement("div");
    book.classList.add("addedBooks");
    book.innerHTML = e;
  
    while (true) {
      let random = Math.floor(Math.random() * bookWrappers.length);
      
      if (bookWrappers[random].children.length < 10) {
        bookWrappers[random].appendChild(book);
        book.style.backgroundColor = colorArray[random]
        break; 
      }
  
      // The loop continues until a suitable bookWrapper is found
    }
  }
  
  
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = document.getElementById("Author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name="read"]:checked').value;
    let myBook = new Book(author, title, pages, read);
    let li = document.createElement("li");
    li.innerHTML = title;
    list.appendChild(li);
    console.log(myLibrary);
    
    form.reset();
    myLibrary.push(myBook);
    addBookToShelf(title)
  });
});
