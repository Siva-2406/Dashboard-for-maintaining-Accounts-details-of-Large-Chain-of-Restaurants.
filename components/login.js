import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Login = () => {
    const navigate = useNavigate();
    
    const { dataLogin } = useContext(DataContext);

    const [currentData, setCurrentData] = useState({
        role: "",
        password: "",
    });

    const handleChange = (e) => {
        setCurrentData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = dataLogin.find(
            (value) =>
                value.role.toLowerCase() === currentData.role.toLowerCase() && 
            String(value.password) === String(currentData.password)
           
        );

        if (user) {
            if (user.roleId === 0) {
                navigate("/adminPage");
            } else if (Number(user.roleId)=== 1) {
                navigate(`/kam/${user.password}`)
            } else if (Number(user.roleId)=== 2) {
                navigate(`/lead/${user.password}`)
            }else{
                alert("invalid")
            }
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
       <div id="loginPage">
         <form onSubmit={handleSubmit} id="LoginForm">
            <h1>Login</h1>
            <input type="text" name="role" onChange={handleChange} placeholder="Enter role" />
            <input type="password" name="password" onChange={handleChange} placeholder="Enter password" />
            <button type="submit">Submit</button>
        </form>
       </div>
    );
};

export default Login;