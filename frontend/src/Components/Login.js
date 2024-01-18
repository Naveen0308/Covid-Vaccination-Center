import { Button, Card, Label, TextInput, Checkbox } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Perform login logic if needed
    // ...

    // Redirect to the mainindex page
    navigate('/mainindex');
  };
  const handleAdminClick=()=>{
    navigate('/adminlogin');
  };

  const handleSignupClick=()=>{
    navigate('/signup');
  };

  return (
    <div>
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">COVID VACCINATION CENTER </h5>
        <div className="flex items-center justify-center min-h-screen">
        <form className="flex max-w-md flex-col gap-4">
            <div className="flex items-center justify-center min-h-screen">
            
            <Card className="w-full md:max-w-2xl p-8 m-4">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">LOGIN </h5>
                <div className="mb-4">
                <Label htmlFor="email1" value="Your email" />
                <TextInput id="email1" type="email" placeholder="Email" required />
                </div>
                <div className="mb-4">
                <Label htmlFor="password1" value="Your password" />
                <TextInput id="password1" type="password" placeholder="Password" required />
                </div>
                <div className="flex items-center gap-2 mb-4">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
                </div>
                <div className="flex gap-2">
                <Button type="button" className="px-4" onClick={handleLoginClick}>
                    Login
                </Button>
                <Button type="submit" className="px-4" onClick={handleAdminClick}>
                    Admin User
                </Button>
                <Button type="submit" className="px-4" onClick={handleSignupClick}>
                    Sign Up
                </Button>
                </div>
            </Card>
            </div>
        </form>
        </div>
    </div>
  );
}
