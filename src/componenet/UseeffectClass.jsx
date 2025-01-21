import * as React from "react";
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name : "John Doe"});
        }, 1000);
    })
}

function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Item 1", "Item 2", "Item 3", "Item 4"]);
        }, 1000);
    })
}

function ApiSimulation(){
    const [user, setUser] = React.useState("loading");
    const [id, setId] = React.useState("loading");

    const [items, setItems] = React.useState([]);
    const [loadingItems, setLoadingItems] = React.useState(true);
    React.useEffect(() => {
        fetchUser().then((user) => {
            setUser(user.name);
            setId(user.id);
        });

        
        fetchdata()
            .then((data) => {
                setItems(data);
                setLoadingItems(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoadingItems(false);
            });
    }, []);


    return (
        <div>
            User: {user}, <br />
            ID: {id}

            <h3>Fetched Items:</h3>
            {loadingItems ? (
                <p>Loading items...</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ApiSimulation;



    



