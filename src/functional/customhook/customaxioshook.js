import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxiosGet= (url, id, request)=>{

    const [responseData, setResponseData] = useState(null)


    useEffect(()=>{
        if(id > 0 && request === "GET"){
            axios.get(url + "/" + id)
                    .then(res=>{
                        console.log(res)
                        setResponseData(ps=>res.data)
                    })
        }
        if(id === null && request === "GET"){
            axios.get(url)
            .then(res=>{
                console.log(res)
                setResponseData(ps=>res.data)
            })
        }
    }, [url, id, request])

    return responseData

}

export default useAxiosGet