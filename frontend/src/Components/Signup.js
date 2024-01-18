import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/');
  };

  return (
    <div>
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">COVID VACCINATION CENTER </h5>
               <div className="flex flex-col items-center justify-center min-h-screen">
        <Card className="w-full md:max-w-2xl p-8 m-4">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">SIGN UP </h5>
                <div className="mb-4">
                <Label htmlFor="name" value="Your name" />
                <TextInput id="name" type="text" placeholder="Name" required />
                </div>
                <div className="mb-4">
                <Label htmlFor="username" value="Your username" />
                <TextInput id="username" type="text" placeholder="User Name" required />
                </div>
                <div className="mb-4">
                <Label htmlFor="email1" value="Your email" />
                <TextInput id="email1" type="email" placeholder="Email" required />
                </div>
                <div className="mb-4">
                <Label htmlFor="password1" value="Your password" />
                <TextInput id="password1" type="password" placeholder="Password" required />
                </div>
                <div className="mb-4">
                <Label htmlFor="confirmpassword1" value="Confirm password" />
                <TextInput id="confirmpassword1" type="password" placeholder="Confirm Password" required />
                </div>
                <Button type="submit" className="px-4" onClick={handleSignupClick}>
                    Sign Up
                </Button>
            </Card>
                </div>
    </div>
  );
}


