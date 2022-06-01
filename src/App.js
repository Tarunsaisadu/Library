import React, { useState } from "react";
import AddBook from "./components/Books/AddBook";
import BookList from "./components/Books/BookList";

function App() {
  const [booklist, setBooklist] = useState([]);

  const addBookHandler = (bName, aName) => {
    setBooklist((prevState) => {
      return [
        ...prevState,
        { name: bName, author: aName, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddBook onAddBook={addBookHandler} />
      <BookList books={booklist} />
    </div>
  );
}

export default App;
