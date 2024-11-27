import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login(){
    const navigate = useNavigate();
    const myUsername = "ilmfathima";
    const myPassword = "ilma123";

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const authenticate = (e) => {
        e.preventDefault();

        if (username === myUsername && password === myPassword){
            navigate('/dashboard');
        } else{
            alert("Username and Password doesn't match!");
        }
    };

    return(
        <div>
            <h1>Login here!</h1>
            <form onSubmit={authenticate}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" id="username" value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder='Enter your username'required/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Enter password' required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}