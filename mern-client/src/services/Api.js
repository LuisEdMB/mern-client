import axios from 'axios'

export const Request = async (request, callbackOk) =>{
    return await axios({
        url: process.env.REACT_APP_API_URL + request.url,
        method: request.method,
        data: request.data,
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => callbackOk(response.data))
    .catch(error => {
        if (error.response === undefined) alert("An error has occurred.")
        else alert(error)
        console.log(error)
    })
}