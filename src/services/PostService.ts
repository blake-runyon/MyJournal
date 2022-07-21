import { apiUrl } from "../data/api_url";

export class PostService {
    GetPosts() {
        return fetch(`${apiUrl}/posts`)
            .then(response => response.json())
            .then(json => json);
    }
}