import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUserProfile} = use(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log({name, email, password, url});

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            // console.log(user);
            // setUser(user);
            updateUserProfile({ displayName: name, photoURL: url })
              .then(() => {
                setUser({ ...user, displayName: name, photoURL: url });
              })
              .catch((error) => {
                console.log(error);
                setUser(user);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body py-5">
            <h1 className="text-2xl font-semibold text-center ">
              Register To Continue
            </h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Your Name" required/>

              <label className="label">Photo URL</label>
              <input type="text" name='url' className="input" placeholder="Enter Photo URL"  required/>

              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" required/>

              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4 shadow-none">
                Register
              </button>
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-red-500 underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;