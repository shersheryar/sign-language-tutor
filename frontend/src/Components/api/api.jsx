import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const uploadImageForPrediction = (formData) =>
  API.post("/gestures/recognize/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });