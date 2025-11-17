function HobbyList(){
    const hobbies =["Game", "Watch Movie", "Listening Music", "Programming", "sleep"];

    return(
        <div style={{ marginTop:"30px"}}>
            <h2>List oh hobbies</h2>
            <ul>
                {hobbies.map((hobby, index)=> (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyList;