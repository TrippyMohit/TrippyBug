const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
import axios from "axios";

export async function getAllCommunityPosts() {
    const posts = await axios.get(`${NEXTAUTH_URL}/api/posts`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return posts?.data
}

export async function getUserPosts() {
    const posts = await axios.get(`${NEXTAUTH_URL}/api/posts/current-user`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return posts?.data
}

export async function getUserFavorites() {
    const posts = await axios.get(`${NEXTAUTH_URL}/api/posts/user-favorites`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return posts?.data
}

export async function getUserLikes() {
    const posts = await axios.get(`${NEXTAUTH_URL}/api/posts/user-likes`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return posts?.data
}

export async function getCommunityPostById(id) {
    const post = await axios.get(`${NEXTAUTH_URL}/api/posts/${id}`)
    return post?.data
}

export async function getCommunityPostComments(id) {
    const comments = await axios.get(`${NEXTAUTH_URL}/api/posts/${id}/comments`)
    return comments?.data
}

export async function getCommunityPostTypes() {
    const postTypes = await axios.get(`${NEXTAUTH_URL}/api/posts/types`)
    return postTypes?.data
}