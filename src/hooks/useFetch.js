

import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [loader, setLoader] =useState(true);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> {
            setData(data)
            setLoader(false)
        })
    }, [url])
    return {data, loader};
};

export default useFetch;