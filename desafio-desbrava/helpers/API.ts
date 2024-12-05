import { requestManager } from "./requestManager";

const validateResponse = async (response: Response) => {    
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

const post = async (url: string, body: any) => {
    try {
        const data = await requestManager.post(url, body)
        return await validateResponse(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

const get = async (url: string) => {
    try {
        const data = await requestManager.get(url)
        return await validateResponse(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const API = {
    '/users' : (username:string) => {
        return get(`/users/${username}`)
    },
    '/repos' : (username:string) => {
        return get(`/users/${username}/repos`)
    },
    '/repo_details' : (username:string, repo:string) => {
        return get(`/repos/${username}/${repo}`)
    },
}