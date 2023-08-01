import React, { useEffect, useState} from "react";

function FetchingApi() 
{
    const URL = 'https://api.nasa.gov/neo/rest/v1/feed?&api_key=YUJsaRQFB7qEzI1P6yBDURMZ5KASckhl7gPhALu6'
    useEffect(() => {
        getData()
    }, [])
    const [responses, setResponse] = useState([])
    async function getData() 
    {
        let data = await fetch(`${URL}`).then((response) => response.json())
        await setResponse(data)
    }    
    return  <>
        <h4>{JSON.stringify(responses['near_earth_objects']['2023-08-07'][0])}</h4>
    </>
}

export default FetchingApi;