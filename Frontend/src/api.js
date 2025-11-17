const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

// GET user
export async function getUsers() {
    const res = await fetch(`${API_URL}/api/users`);
    return await res.json();
}

//POST user
export async function addUser(name) {
    try {
        const res = await fetch(`${API_URL}/api/users`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify({ name }),
        });
    
    if (!res.ok) throw new Error("Failed POST /api/users");
    return await res.json();
  } catch (error) {
    console.error("API Error (addUser):", error);
    throw error;
  }
}