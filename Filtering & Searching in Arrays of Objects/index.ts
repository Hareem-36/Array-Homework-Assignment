interface Book {
    title: string;
    author: string;
    yearPublished: number;
  }
  
  const books: Book[] = [
    { title: "Book1", author: "Author1", yearPublished: 1998 },
    { title: "Book2", author: "Author2", yearPublished: 2005 },
    { title: "Book3", author: "Author3", yearPublished: 2010 },
    { title: "Book4", author: "Author1", yearPublished: 2018 },
  ];
  
  function filterBooksByYear(books: Book[], year: number): Book[] {
    return books.filter(book => book.yearPublished > year);
  }
  
  function searchBooksByAuthor(books: Book[], author: string): Book[] {
    return books.filter(book => book.author.toLowerCase() === author.toLowerCase());
  }
  
  console.log("Books published after 2000:");
  console.log(filterBooksByYear(books, 2000));
  
  console.log("Books by Author1:");
  console.log(searchBooksByAuthor(books, "Author1"));
  
  