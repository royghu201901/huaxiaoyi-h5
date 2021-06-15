import axios from "axios"

export default axios.create({
  baseURL: "https://api.fmgo365.com/",
  headers: {
    "Content-type": "application/json"
  }
})