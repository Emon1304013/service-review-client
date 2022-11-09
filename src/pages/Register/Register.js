import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  useTitle('Register')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User registered successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
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
        onSubmit={handleRegister}
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <Button type="submit" className="w-1/2 mx-auto">
          Register
        </Button>
      </form>
      <Button
        onClick={handleGoogleSignin}
        color="success"
        type="submit"
        className="w-1/2 mx-auto my-4"
      >
        Register Using Google
      </Button>
    </div>
  );
};

export default Register;
