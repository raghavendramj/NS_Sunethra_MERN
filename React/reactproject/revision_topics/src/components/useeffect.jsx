import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(`useEffect is called ${resourceType}`);
        const newURL = `https://jsonplaceholder.typicode.com/${resourceType}`;
        console.log("URL :- ", newURL);
        fetch(newURL)
            .then(response => response.json())
            .then(json => {
                console.log("convertedJSON -> ", json);
                setItems(json);
            })
    }, [resourceType]);

    return (
        <div className='container m-3'>
            <h2>Use Effect Hook Demo</h2>
            <h3>Selected Resource :- {resourceType}</h3>
            <button onClick={() => setResourceType("posts")} className='btn btn-primary m-3'>Posts</button>
            <button onClick={() => setResourceType("users")} className='btn btn-danger m-3'>Users</button>
            <button onClick={() => setResourceType("comments")} className='btn btn-success m-3'>Comments</button>

            <ul>
                {items.map(eachItem => {
                    return <li>{JSON.stringify(eachItem)}</li>
                })}
            </ul>

        </div>
    )
}
