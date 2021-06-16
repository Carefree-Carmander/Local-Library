function findAuthorById(authors, id) {
  return (find = authors.find((author) => author.id === id));
}

function findBookById(books, id) {
  return (find = books.find((book) => book.id === id));
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let borrowedBooks = [];
  let availableBooks = [];
  books.forEach((book) =>
    book.borrows[0].returned
      ? availableBooks.push(book)
      : borrowedBooks.push(book)
  );
  result.push(borrowedBooks, availableBooks);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  const result = borrowed.map((borrow) => {
    const account = accounts.find((account) => borrow.id === account.id);
    return { ...borrow, ...account };
  });
  result.length = 10;
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
