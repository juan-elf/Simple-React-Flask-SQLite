import React, {useState} from "react";

function FormInput() {
    const [name, setName] = useState(" ");

const handleChange = (event) =>{
    setName(event.target.value);
};

return(
    <div style={{marginTop:"30px"}}>
        <h2>Input your name</h2>
        <input type="text" placeholder="your name ..."
        value={name} onChange={handleChange} />

        {/* conditional rendering*/}
        {name ? (
            <p>Halo, {name || "..."}</p>
        ): (
            <p> Please fill your name ...</p>
        )}
    </div>
);
}

export default FormInput;