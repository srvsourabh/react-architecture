import AXIOS from 'axios';
import Config from '../config';

const instance = AXIOS.create({
    baseURL: Config.baseApiUrl,
    timeout: 30000
});

const endpoints = {
    articles: '/v1/articles/', //post, get
}

instance.interceptors.response.use(res=>{
    console.log({res});
})

export default { instance, endpoints };