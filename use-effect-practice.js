import { useState, useEffect } from "react";

function UseEffectPractice()
{
    const [width, setWidth] = useState(window.innerWidth)
    const [resource, setResource] = useState('posts')
    const [items, setItems] = useState([])
    async function getApi()
    {
        try
        {
            let response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            response = await response.json()
            await setItems(response)
        }
        catch(error)
        {
            console.log(`Error ${error}`)
        }

    }
    useEffect(() => 
    {
        window.addEventListener('resize', changeWidth)
        return () => window.removeEventListener('resize', setWidth)
    }, [])
    useEffect(() =>
    {
        getApi()
    }, [resource])

    const changeWidth = () =>
    {
        setWidth(window.innerWidth)
    }

    return <>
        <h1>Joe</h1>
        <div>{width}</div>
        <div style={{display: 'flex', margin: 10, justifyContent: 'space-around'}}>
            <div onClick={() => setResource('posts')}>posts</div>
            <div onClick={() => setResource('comments')}>comments</div>
            <div onClick={() => setResource('todos')}>todos</div>
        </div>
        <div>{resource}</div>
            <div>{items.map((item) => <p>{JSON.stringify(item)}</p>)}</div>

    </>
}

export default UseEffectPractice