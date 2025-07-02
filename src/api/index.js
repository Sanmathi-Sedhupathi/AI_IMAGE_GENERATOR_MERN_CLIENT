import axios from "axios";


const API = axios.create({
  baseURL: "https://ai-image-generator-mern-backend.onrender.com/api/",
 
});

// Fetch all posts
export const GetPosts = async () => await API.get("/post");

// Create a new post
export const CreatePost = async (data) => await API.post("/post", data);

// Generate image from prompt
export const GenerateImageFromPrompt = async (data) => {
  return await API.post("/generate-image/", data);
};
