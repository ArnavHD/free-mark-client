import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const LoginPage = () => {
    const { signIn } = use(AuthContext);
    const handleLogIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email =  form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
          });
    }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body space-y-5">
            <h1 className='text-2xl font-semibold text-center'>Login to Continue</h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" required/>
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral shadow-none mt-4">Login</button>
              <p>Don't Have An Account <Link to="/auth/register" className='text-red-500 underline'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;