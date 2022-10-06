document.addEventListener("click", (event)=>{ console.log(" 👀👀👀 :: You Just Clicked on == ", event.target) } )

// fetch('https://anapioficeandfire.com/api/books')
// .then(resp => console.log(resp))

// fetch('https://anapioficeandfire.com/api/books/5')
// .then(resp => resp.json())
// .then(json => console.log(json));

// Get 5th Book
// fetch('https://anapioficeandfire.com/api/books/5')
// .then(resp => resp.json())
// .then(json => console.log(json));

// Get 1031st character in series
// fetch('https://anapioficeandfire.com/api/characters/1031')
// .then(resp => {
//   if (!resp.ok) {
//     throw Error('ERROR');
//   }
//   return resp.json();
// })
// .then(json => {
//   console.log(json);
// })

// The Total Number of Pages of All the Books
// function fetchTotalPagesInSeries() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => {
//     if(!resp.ok) {
//       throw Error('ERROR');
//     }
//     return resp.json();
//   })
//   .then(json => {
//     const seriesPages = json.map(books => {
//       return parseInt(books.numberOfPages);
//     })
//     const seriesSum = seriesPages.reduce((partialSum, a) => partialSum + a, 0);
//     console.log(seriesSum);
//   })
// }
// fetchTotalPagesInSeries();

// LAB ASSIGNMENT
function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
    })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})