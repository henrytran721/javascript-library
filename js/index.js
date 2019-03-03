let addBtn = document.getElementById('addBtn');

const name = document.getElementById('name');

const table = document.querySelector('.table');

const tbody = document.querySelector('.tableBody');

const submit = document.getElementById('submit');


function Book(name, author, pages, readStatus){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

let lib = [];

addBtn.addEventListener('click', function(){
  let x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

submit.addEventListener('click', function(){
 let readThree = document.getElementsByName('read');
  function readThreeChecked() {
  for(let i = 0; i < readThree.length; i++) {
    if(readThree[i].checked) {
      return readThree[i].value;
    }
  }
  }
const newBook = new Book(name.value, author.value, pages.value, readThreeChecked());
  console.log(newBook);
  if(name.value === '' || author.value === "" || pages.value === "" || readStatus.value === "") {
    alert('Please enter book information.');
  } else {

  let newRow = document.createElement('tr');
  let tableName = document.createElement('td');
  tableName.textContent = newBook.name;
  let tableAuthor = document.createElement('td');
  tableAuthor.textContent = newBook.author;
  let tablePages = document.createElement('td');
  tablePages.textContent = newBook.pages;
  let tableRead = document.createElement('td');
  if(newBook.readStatus === "Read") {
    tableRead.innerHTML = "<button id = 'hasRead' class = 'haveReadBtn'>Read</button>";
  } else if (newBook.readStatus === "Have Not Read") {
    tableRead.innerHTML = "<button id = 'hasNotRead' class = 'haveNotReadBtn'>Have Not Read</button>";
  } else {
    tableRead.innerHTML = "<button id = 'inProgress' class = 'inProgress'>In Progress</button>";
  }
  let tableDeleteBook = document.createElement('td');
  tableDeleteBook.innerHTML = "<button class = 'deleteBtn' id = 'deleteBtn'>Delete</button>";

  tbody.appendChild(newRow);
  newRow.appendChild(tableName);
  newRow.appendChild(tableAuthor);
  newRow.appendChild(tablePages);
  newRow.appendChild(tableRead);
  newRow.appendChild(tableDeleteBook);

  let rows = document.getElementsByTagName('tr');
  let rowIndex = 0;
  for(let j = 1; j < rows.length; j++) {
    rowIndex = j;
    console.log(rowIndex);
    }

      let deleteButton = document.getElementsByClassName('deleteBtn');
      let deleteIndex = 0;
    for(let i = 0; i < deleteButton.length; i++) {
      deleteIndex = i;
      console.log(deleteIndex);
      deleteButton[i].addEventListener('click', function(){
        if(deleteIndex < rowIndex) {
          tbody.deleteRow(rowIndex);
        }
      });
      }
    }
    function changeProgress() {
        let hasRead = document.getElementById('hasRead');
        let hasNotRead = document.getElementById('hasNotRead');
        let inProgress = document.getElementById('inProgress');
        hasRead.addEventListener('click', function(){
          if(hasRead.classList.contains('haveReadBtn')) {
            hasRead.classList.remove('haveReadBtn');
            hasRead.textContent = "Have Not Read";
            hasRead.id = "hasNotRead";
            hasRead.classList.add('haveNotReadBtn');
          } else if(hasRead.classList.contains('haveNotReadBtn')) {
            hasRead.classList.remove('haveNotReadBtn');
            hasRead.textContent = "In Progress";
            hasRead.id = "inProgress";
            hasRead.classList.add('inProgress');
          } else if (hasRead.classList.contains('inProgress')) {
            hasRead.classList.add('haveReadBtn');
            hasRead.textContent = "Read";
            hasRead.id = "hasRead";
            hasRead.classList.remove('inProgress');
          }
        });

    }
    changeProgress();
});
