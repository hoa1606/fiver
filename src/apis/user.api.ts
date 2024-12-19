import { ApiReponse } from "../interfaces/api.inteface";
import { ContenUser, CurrentUser, LoginRequestBody } from "../interfaces/user.inteface";
import fetcher from "./fetcher";



export const userApi = {
    login: async(body: LoginRequestBody) =>{
        try {
            const response =await fetcher.post<ApiReponse<ContenUser<CurrentUser>>>('/auth/signin', {body});
            return response.data.content;
        } catch (error) {
            throw error;
        }
    },

    register: async(body: LoginRequestBody) =>{
        try {
            const response =await fetcher.post<ApiReponse<ContenUser<CurrentUser>>>('/auth/signin', {body});
            return response.data.content;
        } catch (error) {
            throw error;
        }
    }
    
}