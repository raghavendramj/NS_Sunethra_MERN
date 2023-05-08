import { useEffect, useState } from "react";

function UseEffectThird() {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    console.log("render component is called");

    useEffect(() => {
        console.log(`onMount :- Only run on ${resourceType} change`);
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => {
                console.log("json :-", json);
                console.log("type of json :-", typeof json);
                setItems(json);
            });

    }, [resourceType]);

    return (
        <div className="container m-3">
            <button className="btn btn-primary m-2">Dummy</button>
            <button onClick={() => setResourceType("posts")} className="btn btn-primary m-2">Posts</button>
            <button onClick={() => setResourceType("users")} className="btn btn-primary m-2">Users</button>
            <button onClick={() => setResourceType("comments")} className="btn btn-primary m-2">Comments</button>
            <h2 className="mt-5">Value Selected :- {resourceType}</h2>
            <h3>
                {items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })}
            </h3>
        </div>
    );
}
export default UseEffectThird;