import React, { useContext } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { AuthContext } from '../../contexts/UserContext';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTitle } from '../../hooks/useTitle';

const Login = () => {
    const { signInUser, googleSignIn,setLoading } = useContext(AuthContext);
    useTitle('Login')

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
        const currentUser = {
          email: user?.email,
        }
        toast.success("User Logged In successfully")

        //Get JWT Token from server and verify user

        fetch('https://roza-fusion-server.vercel.app/jwt',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('auth-token',data.token)
        })
        .catch(err => {
          console.log(err);
        })


        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message)
        
      })
      .finally(() => {
        setLoading(false);
      });
      
  };

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      const currentUser = {
        email: user?.email,
      }
      //Get JWT Token from server and verify user
      fetch('https://roza-fusion-server.vercel.app/jwt',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast.success("Logged In successfully")
          localStorage.setItem('auth-token',data.token)
          navigate(from, { replace: true });
        })
        .catch(err => {
          console.log(err);
        })
    });
  };

  return (
    <div className='my-20' >
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
    </div>
  );
};

export default Login;