import axios from "axios";

const BASE_URL = "https://api-ne7i.onrender.com/";



const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI5MjAzOWQ4MDdjZGE5NzJkNDRjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDYzODEwNiwiZXhwIjoxNjkwODEwOTA2fQ.BGioWNegAG5I8SwbOuwE6TEMf1XhyiIf389v2tHmRzU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
