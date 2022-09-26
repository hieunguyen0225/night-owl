import axios from "axios"
import { Api_Url } from "./const"

const instance=axios.create({
    baseURL:Api_Url,
    params:{
        api_key:"84d23d1ea2504e1e6b171a06af819654",
    },
});


export default instance;

