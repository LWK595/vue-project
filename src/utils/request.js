import axios from "axios";
import Config from "webpack-chain";

const server = axios.create({
    timeout:5000,

    withCredentials:true
})


//请求的拦截

server.interceptors.request.use(()=>{
    if(Config.method == "get"){
        Config.params = {...Config.data};
    }

    // config.headers["content-type"] = "application/json"
},(err)=>{
    Promise.reject(err);
})

//响应的拦截
server.interceptors.response.use(()=>{
    if(resizeBy.status == 200){
        return res.data;
    }
})

export default server;