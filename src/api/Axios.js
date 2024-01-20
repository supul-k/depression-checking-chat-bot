import axios from "axios";
const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `${token}`,
    "Content-type": "application/json",
  },
});

export const registerAPI = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 30000,
  headers: {
    "Content-type": "application/json",
  },
});

export const LoginUserApi = async (loginData) => {
  const res = await registerAPI.post(`/user/login`, loginData);
  return res;
};

export const RegisterUserUserApi = async (RegisterData) => {
  const res = await registerAPI.post(`/user/register_user`, RegisterData);
  return res;
};

export const ChatResponseApi = async (sentData) => {
  const res = await api.post(`/chat/receive_message`, sentData);
  return res;
};

export const ChatEvaluateApi = async (evaluateData) => {
  const res = await api.post(`/chat/evaluate`, evaluateData);
  return res;
};

export const ChatActivityApi = async (topic) => {
  const res = await api.post(`/activity/chat_activity`, topic);
  return res;
};

export const ChatActivityMessageApi = async (sentData) => {
  const res = await api.post(`/activity/chat_activity_message`, sentData);
  return res;
};