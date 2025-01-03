import { commonAPI } from "./common"
import SERVER_URL from "./url"

export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
export const loginApi=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}