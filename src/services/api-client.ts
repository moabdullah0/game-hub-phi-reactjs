import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',

    params:{
        key : 'c2a0d46f711e46b0b88247f7fb0d7e0f'
    }
})