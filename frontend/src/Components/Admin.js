import { Button, Card, Label, TextInput, Checkbox } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    // Perform login logic
    const enteredEmail = document.getElementById('email1').value;
    const enteredPassword = document.getElementById('password1').value;

    // Check if email and password are valid (replace this with your actual logic)
    if (enteredEmail === 'abc@gmail.com' && enteredPassword === 'positivity') {
      // Redirect to the mainindex page
      navigate('/mainindex');
    } else {
      // Display alert for invalid credentials
      alert('Invalid admin user');
    }
  };

  return (
    <div>
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">COVID VACCINATION CENTER </h5>
      <div className="flex items-center justify-center min-h-screen">
        <form className="flex max-w-md flex-col gap-4">
          <div className="flex items-center justify-center min-h-screen">
            <Card className="w-half md:max-w-2xl p-8 m-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">ADMIN LOGIN </h5>
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
              
              <Button type="button" className="px-4" onClick={handleAdminClick}>
                Login
              </Button>
              
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}
