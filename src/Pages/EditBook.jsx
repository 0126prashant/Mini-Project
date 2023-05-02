import React from "react";

import styled from "styled-components";

export const EditBook = () => {
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: </h1>
      <input type="text" placeholder="Name" data-testid="book-name" />
      <input type="text" placeholder="Author" data-testid="book-author" />
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
      />
      <button data-testid="update-book">Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
