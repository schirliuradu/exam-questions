import axios from "axios"

const instance = axios.create({
  baseURL: "https://pegaso-exams.firebaseio.com/",
})

export default instance
