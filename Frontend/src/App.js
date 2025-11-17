import React, { useEffect, useState } from "react";
import { getUsers, addUser } from "./api";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    // Load users
    useEffect(()=> {
        loadUsers();
    }, []);

    async function loadUsers() {
        const data = await getUsers();
        setUsers(data);
    }

    async function handleAddUser(e) {
        e.preventDefault();
        if(!name) return;

        await addUser(name);
        setName("");
        loadUsers();
    }

    return (
        <div style={{textAlign: "center", marginTop:"50px"}}>
            <h1>Reaxt Flask SQLite</h1>

            <form onSubmit={handleAddUser} style={{marginTop:"20px"}}>
            <input
                type="text"
                placeholder="Enter name ..."
                value={name}
                onChange={(e) => setName (e.target.value)}
                style={{padding:"10px"}}
                />
            <button style={{marginLeft:"15px", padding:"10px 20px"}}>
                Add User
            </button>
            </form>

            <h2 style={{marginTop: "40px"}}>User List</h2>
            {users.map((u) => (
                <p key={u.id}>{u.id}. {u.name}</p>
            ))}
        </div>
    );
}

export default App;
