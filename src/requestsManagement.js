import axios from 'axios';
import storage from './storage.js';

const appRequest = {
    post: async (url, {...data}) => {
        try {
            const response = await axios.post(url, {
                ...data,
            });
            response.data;
        } catch (error) {
            console.log(error);
        }
    },
    get: async (url) => {
        try {
            const response = await axios.get(url).then(res => {
                if(Symbol.iterator in Object(res.data)){
                    return storage.set(url, Array(...res.data));
                }
                storage.set(url, res.data);
            });
            response;
        } catch (error) {
            console.log(error);
        }
    },
    update: async (url, {...data}) => {
        try {
            const response = await axios.put(url, {
                ...data,
            });
            response.data;
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (url) => {
        try {
            const response = await axios.delete(url);
            response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
export default appRequest;
