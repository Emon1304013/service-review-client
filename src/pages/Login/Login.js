import React, { useContext } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { AuthContext } from '../../contexts/UserContext';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser, googleSignIn,setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
    .then((result) => {
        const user = result.user;
        toast.success("User Logged In successfully")
        
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        
      })
      .finally(() => {
        setLoading(false);
      });
      
  };

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="w-full lg:w-1/2 mx-4 lg:mx-auto bg-gray-200 p-4 rounded-xl">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@company.com"
            required={true}
            shadow={true}
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
            name="password"
          />
        </div>
        
        <Button type="submit" className="w-1/2 mx-auto">
          Login
        </Button>
      </form>
      <Button
        onClick={handleGoogleSignin}
        color="success"
        type="submit"
        className="w-1/2 mx-auto my-4"
      >
        Login Using Google
      </Button>
    </div>
  );
};

export default Login;