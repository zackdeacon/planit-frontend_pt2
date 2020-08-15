import axios from "axios";

export default {
  // AUTHORIZATION
  signup: function () {
    return axios.post("/api/signup", userData);
  },
  signup: function () {
    return axios.post("/api/signup");
  },

  //MAPS
  // Gets all maps
  getMaps: function () {
    return axios.get("/api/maps");
  },
  // Gets the map with the given id
  getMap: function (id) {
    return axios.get("/api/maps/" + id);
  },
  // Deletes the map with the given id
  deleteMap: function (id) {
    return axios.delete("/api/maps/" + id);
  },
  // Saves a map to the database
  saveMap: function (mapData) {
    return axios.post("/api/maps/new", mapData);
  },

  //SUGGESTIONS
  // Gets all suggesstions
  getSuggestions: function () {
    return axios.get("/api/suggestions");
  },
  // Gets the suggestion with the given id
  getSuggestion: function (id) {
    return axios.get("/api/suggestions/" + id);
  },
  // Deletes the suggestion with the given id
  deleteSuggestion: function (id) {
    return axios.delete("/api/suggestions/" + id);
  },
  // Saves a suggestion to the database
  saveSuggestion: function (suggestionData) {
    return axios.post("/api/suggestions/new", suggestionData);
  },

  //Chats
  getAllChats: function() {
    return axios.get("/api/chats");
  },
  postChat: function(chatData) {
    return axios.post("/api/chats/new", chatData)
  },
  getChatsFromMap: function(mapId) {
    return axios.get("/api/chats/map", mapId);
  },
};
