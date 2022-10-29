import axios from "axios"


const BASE_URL  = "http://localhost:5000/api/"

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDViNGIzOWQyMTYxYmYyNTA5NjhlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTc1NzU2OSwiZXhwIjoxNjY2MDE2NzY5fQ.MxCCJoDFZdFenicrl_7-z1CNgTK8LrruZDxx9yZYfxg"
// export const publicRequest = axios.create({
//     baseURL : BASE_URL,
// }) 

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
}) 