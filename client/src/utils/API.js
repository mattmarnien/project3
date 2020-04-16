import axios from "axios";

export default {
  // login/logout
  userLogin: login => {
    return axios.post("/api/login",login)
  },
  userLogout: () => {
    return axios.get("/api/logout")
  },
  
  // Cards
  getCards: () => {
    return axios.get("/api/gameCards/");
  },

  //User
  getUsers: () => {
    return axios.get("/api/users");
  },

  addUser: user => {
    return axios.post("/api/users", user);
  },
  // Deck
  getDeck: () => {
    return axios.get("/api/decks")
  },
  getOneDeck: id => {
    return axios.get("/api/decks/" + id)
  },
  buildDeck: data => {
    return axios.post("/api/decks", data)
  }
};
