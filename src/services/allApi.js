import { commonAPI } from "./common"
import SERVER_URL from "./url"

export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
export const loginApi=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}
export const postDataApi=async(post,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/post`,post,reqHeader);
}
export const getPostsApi=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getposts`,"",reqHeader);
}