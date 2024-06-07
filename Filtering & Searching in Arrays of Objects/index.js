var books = [
    { title: "Book1", author: "Author1", yearPublished: 1998 },
    { title: "Book2", author: "Author2", yearPublished: 2005 },
    { title: "Book3", author: "Author3", yearPublished: 2010 },
    { title: "Book4", author: "Author1", yearPublished: 2018 },
];
function filterBooksByYear(books, year) {
    return books.filter(function (book) { return book.yearPublished > year; });
}
function searchBooksByAuthor(books, author) {
    return books.filter(function (book) { return book.author.toLowerCase() === author.toLowerCase(); });
}
console.log("Books published after 2000:");
console.log(filterBooksByYear(books, 2000));
console.log("Books by Author1:");
console.log(searchBooksByAuthor(books, "Author1"));
