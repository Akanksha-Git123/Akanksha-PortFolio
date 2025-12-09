import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// API calls
export const getProfile = () => api.get("/profile");
export const getSkills = () => api.get("/skills");
export const getProjects = () => api.get("/projects");
export const getEducation = () => api.get("/education");
export const sendContact = (data) => api.post("/contact", data);
