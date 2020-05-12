import axios from "axios";
// import { resolve } from 'dns';
// import { rejects } from 'assert';

export default {
    register:function(name, email, password)
    {
            return axios.post("/api/user", {
                name,
                email,
                password,
        
            });
    }
}