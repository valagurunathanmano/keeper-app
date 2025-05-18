import React, { useState } from 'react';

function FunctionInputs() {
    const [data, setData] = useState({
        name: "",
        email: ""
    });

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <label>Enter name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={data.name}
                    onChange={changeHandle}
                />
                <br />
                <label>Enter email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={changeHandle}
                />
                <br />
                <h4>Output</h4>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
            </form>
        </div>
    );
}

export default FunctionInputs;
