import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxiosGet= (url, id)=>{

    const [responseData, setResponseData] = useState(null)


    useEffect(()=>{
        if(id > 0){
            axios.get(url + "/" + id)
                    .then(res=>{
                        console.log(res)
                        setResponseData(ps=>res.data)
                    })
        }
        if(id === null){
            axios.get(url)
            .then(res=>{
                console.log(res)
                setResponseData(ps=>res.data)
            })
        }
    }, [url, id])

    return responseData

}

export default useAxiosGet