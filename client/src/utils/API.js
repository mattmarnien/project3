import axios from "axios";

export default {
  // Gets all books
  getAllCards: function() {
    return axios.get("/api/gameCards/");
  },

  getCards: function(data) {
    return axios.get("/api/gameCards/" + data);
  }
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
