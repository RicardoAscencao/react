import { createSlice } from "@reduxjs/toolkit";

const booksSlide = createSlice({
    name: '[Library] Books',
    initialState : {
        books: [],
        filteredBooks: [],
    },
    reducers:{
        getBooks: (state, action) => {
            state.books = action.payload;
            state.filteredBooks= action.payload;
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(b => b.id !== action.payload);
            state.filteredBooks = state.books;
            fetch(`http://localhost:3000/books/${action.payload}`, {
                method: "DELETE"
            });
        },
        showReadBooks: (state) => {
            state.filteredBooks = state.books.filter(b => b.alreadyRead === true)
        },
        showNotReadBooks: (state) => {
            state.filteredBooks = state.books.filter(b => b.alreadyRead === true)
        },
        showAllBooks: (state) => {
            state.filteredBooks = state.books
        },
    }
})

export const {getBooks, deleteBook, showReadBooks, showNotReadBooks, showAllBooks} = booksSlide.actions;
export default booksSlide.reducer;