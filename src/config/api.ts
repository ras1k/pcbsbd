import axios from 'axios';
export default () => axios.create({
    baseURL: '',
    headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
    },
})