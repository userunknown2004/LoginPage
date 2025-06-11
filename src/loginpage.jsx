import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({ Username: "", password: "" });
    const [message, setMessage] = useState("");

   const users = {
    Admin: [
        { Username: "A001", password: "admin1" },
        { Username: "A002", password: "admin2" },
        { Username: "A003", password: "admin3" }
    ],
    Customer: [
        { Username: "C001", password: "cus1" },
        { Username: "C002", password: "cus2" },
        { Username: "C003", password: "cus3" }
    ],
    Guest: [
        { Username: "G001", password: "guestpass1" },
        { Username: "G002", password: "guestpass2" },
        { Username: "G003", password: "guestpass3" }
    ]
};

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    let role = null;

    for (let userType in users) {
        if (users[userType].some(u => u.Username === user.Username && u.password === user.password)) {
            role = userType;
            break;
        }
    }

    if (role) {
        setMessage("Login is successful!",{role});
    } else {
        setMessage("Invalid Credentials. Try again.");
    }
};

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>UserName</label>
                    <input
                        type="text"
                        name="Username"
                        value={user.Usernamesername}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <button type="submit">Login</button>
                </section>
                {message && <p>{message}</p>}
            </form>
        </>
    );
};

export default Login;