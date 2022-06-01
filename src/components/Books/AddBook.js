import { React, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddBook.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddBook = (props) => {
  const [enteredBookname, setEnteredBookname] = useState("");
  const [enteredAuthorname, setEnteredAuthorname] = useState("");
  const [error, setError] = useState();
  const addBookHandler = (event) => {
    event.preventDefault();
    if (
      enteredAuthorname.trim().length === 0 ||
      enteredBookname.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "please enter valid name and author",
      });
      return;
    }
    props.onAddBook(enteredBookname, enteredAuthorname);
    setEnteredAuthorname("");
    setEnteredBookname("");
  };

  const booknameChangeHandler = (event) => {
    setEnteredBookname(event.target.value);
  };

  const authornameChangeHandler = (event) => {
    setEnteredAuthorname(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addBookHandler}>
          <label htmlFor="bookname">Bookname</label>
          <input
            id="bookname"
            type="text"
            value={enteredBookname}
            onChange={booknameChangeHandler}
          />
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={enteredAuthorname}
            onChange={authornameChangeHandler}
          />
          <Button type="submit">Add Book</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddBook;
