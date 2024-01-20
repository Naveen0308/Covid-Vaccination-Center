import React, { useState } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    // Use state to manage form data
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignupClick = async () => {
        try {
            // Destructure form data
            const { name, username, email, password, confirmPassword } = formData;

            // Send a POST request to the backend API for signup
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    username,
                    email,
                    password,
                    confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Successful signup, redirect to the desired page
                navigate('/');
            } else {
                // Handle signup error
                alert(data.error || 'Signup failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                COVID VACCINATION CENTER
            </h5>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Card className="w-full md:max-w-2xl p-8 m-4">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        SIGN UP
                    </h5>
                    <div className="mb-4">
                        <Label htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="username" value="Username" />
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="User Name"
                            required
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email1" value="Email" />
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password1" value="Password" />
                        <TextInput
                            id="password1"
                            type="password"
                            placeholder="Password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="confirmpassword1" value="Confirm password" />
                        <TextInput
                            id="confirmpassword1"
                            type="password"
                            placeholder="Confirm Password"
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button type="submit" className="px-4" onClick={handleSignupClick}>
                        Sign Up
                    </Button>
                </Card>
            </div>
        </div>
    );
}
