const books = [
  {
    name: "The Silent Patient",
    genre: "Thriller",
    edition: 3,
    publishDate: "2019-02-05"
  },
  {
    name: "Atomic Habits",
    genre: "Self-Help",
    edition: 5,
    publishDate: "2018-10-16"
  },
  {
    name: "Dune",
    genre: "Science Fiction",
    edition: 7,
    publishDate: "1965-08-01"
  },
  {
    name: "The Hobbit",
    genre: "Fantasy",
    edition: 12,
    publishDate: "1937-09-21"
  },
  {
    name: "Pride and Prejudice",
    genre: "Romance",
    edition: 10,
    publishDate: "1813-01-28"
  },
  {
    name: "Clean Code",
    genre: "Programming",
    edition: 4,
    publishDate: "2008-08-01"
  },
  {
    name: "The Alchemist",
    genre: "Adventure",
    edition: 8,
    publishDate: "1988-05-01"
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    edition: 15,
    publishDate: "1997-06-26"
  },
  {
    name: "The Psychology of Money",
    genre: "Finance",
    edition: 6,
    publishDate: "2020-09-08"
  },
  {
    name: "1984",
    genre: "Dystopian",
    edition: 9,
    publishDate: "1949-06-08"
  },
  {
    name: "The Pragmatic Programmer",
    genre: "Programming",
    edition: 3,
    publishDate: "1999-10-20"
  },
  {
    name: "Sapiens",
    genre: "History",
    edition: 11,
    publishDate: "2011-01-01"
  },
  {
    name: "The Great Gatsby",
    genre: "Classic",
    edition: 14,
    publishDate: "1925-04-10"
  },
  {
    name: "Deep Work",
    genre: "Self-Help",
    edition: 2,
    publishDate: "2016-01-05"
  },
  {
    name: "It",
    genre: "Horror",
    edition: 13,
    publishDate: "1986-09-15"
  }
];


const UserBook=books.filter((book)=>book.genre==="Programming");