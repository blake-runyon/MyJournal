import { apiUrl } from "../data/api_url";
import axios from "axios";

export class PostService {
    GetPosts() {
        return axios.get(`${apiUrl}/posts`).then(response => response.data);
    }
}