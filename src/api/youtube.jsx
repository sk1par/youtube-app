import axios from "axios";
const KEY = "AIzaSyBBUbOCS_IzUocimjMuZz34EuY8eg8BO7s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});