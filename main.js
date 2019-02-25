function Book(name, author, pages, completedBook) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.completedBook = false;
}

let newBook = document.getElementById('newBook');
newBook.addEventListener('click', function(){
  var x = document.getElementById("newBookForm");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
});

let bookName = document.getElementById('bookName');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let submit = document.getElementById('submit');
let mainTable = document.getElementById('mainTable');
let read = document.getElementById('read');
let hasNotRead = document.getElementById('hasNotRead');
let inProgress = document.getElementById('inProgress');
let firstReadButton = document.getElementById('firstReadButton');
firstReadButton.addEventListener('click', function(){
  if(firstReadButton.textContent === read.value) {
    firstReadButton.textContent = hasNotRead.value;
    firstReadButton.classList.remove('readButton');
    firstReadButton.classList.add('notReadButton');
  } else if (firstReadButton.textContent === hasNotRead.value) {
    firstReadButton.textContent = inProgress.value;
    firstReadButton.classList.remove('noteReadButton');
    firstReadButton.classList.add('progressButton');
  } else if(firstReadButton.textContent === inProgress.value) {
    firstReadButton.textContent = read.value;
    firstReadButton.classList.remove('progressButton');
    firstReadButton.classList.add('readButton');
  }
});
submit.addEventListener('click', function(){
  let tableRow = document.createElement('tr');
  let tableDataOne = document.createElement('td');
  let tableDataTwo = document.createElement('td');
  let tableDataThree = document.createElement('td');
  let tableDataFour = document.createElement('td');
  let tableDataFive = document.createElement('td');
  console.log(bookName.value);
  if(bookName.value === '' || author.value === '' || pages.value === '') {
    alert('Please enter your book information.');
  } else {
    tableDataOne.textContent = bookName.value;
    tableDataTwo.textContent = author.value;
    tableDataThree.textContent = pages.value;
    mainTable.appendChild(tableRow);
    tableRow.appendChild(tableDataOne);
    tableRow.appendChild(tableDataTwo);
    tableRow.appendChild(tableDataThree);
    let readButton = document.createElement('button');
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteButton');
    deleteBtn.textContent = 'Delete';
    tableDataFour.appendChild(readButton);
    tableRow.appendChild(tableDataFour);
    tableDataFive.appendChild(deleteBtn);
    tableRow.appendChild(tableDataFive);
    if(read.checked === true){
      readButton.textContent = read.value;
      readButton.classList.add('readButton');
    }
    if (hasNotRead.checked === true) {
      readButton.textContent = hasNotRead.value;
      readButton.classList.add('notReadButton');
    }
    if(inProgress.checked === true) {
      readButton.textContent = inProgress.value;
      readButton.classList.add('progressButton');
    }
    readButton.addEventListener ('click', function(e) {
        if(readButton.textContent === read.value) {
          readButton.textContent = hasNotRead.value;
          readButton.classList.remove('readButton');
          readButton.classList.add('notReadButton');
        } else if (readButton.textContent === hasNotRead.value) {
          readButton.textContent = inProgress.value;
          readButton.classList.remove('noteReadButton');
          readButton.classList.add('progressButton');
        } else if(readButton.textContent === inProgress.value) {
          readButton.textContent = read.value;
          readButton.classList.remove('progressButton');
          readButton.classList.add('readButton');
        }
    });

    deleteBtn.addEventListener('click', function(){
      mainTable.removeChild(tableRow);
      tableRow.removeChild(tableDataOne);
      tableRow.removeChild(tableDataTwo);
      tableRow.removeChild(tableDataThree);
    });
  }
});


let deleteBtn = document.getElementById('deleteBtn');
let exampleBook = document.getElementById('exampleBook');
let tableBody = document.getElementById('tableBody');

deleteBtn.addEventListener('click', function(){
  tableBody.removeChild(exampleBook);
});
