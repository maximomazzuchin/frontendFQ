import axios from "axios";
import { useEffect } from "react";

export const getProducts = async() => {
    // const[articles, setArticles] = useState([]);
    let response;
    await axios.get('http://127.0.0.1:8000/api/products/')
    .then(res => {
        console.log(res.data)
        response = res.data
        // setArticles(res.data)
    }).catch(err => {
        console.log(err)
    })
    return response;
}
