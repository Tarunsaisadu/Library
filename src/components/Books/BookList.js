import React from "react";
import Card from "../UI/Card";
import classes from "./BookList.module.css";

const BookList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.books.map((book) => (
          <li key={book.id}>
            The <strong>{book.name}</strong> book author is{" "}
            <strong>{book.author}</strong>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BookList;
