import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:4000/register",
                { username, password },
                { headers: { "Content-Type": "application/json" } }
            );

            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Registration Failed");
        }
    };

    return (
        <Container fixed>
            <Typography variant="h4" className="page-title">
                Register
            </Typography>
            <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="action-button">
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>

                <p className="button-link" onClick={() => navigate("/login")}>
                    Login
                </p>
            </div>
        </Container>
    );
};

export default Register;
