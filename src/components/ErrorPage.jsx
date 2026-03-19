import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate("/");
    }
    return (
      <div className="min-h-screen ">
        <div className="min-h-screen flex flex-col justify-center items-center-safe bg-white">
          <div>
            <img
              className="w-76 md:w-2xl lg:w-3xl"
              src="https://i.ibb.co/20H8bhjb/bg-something-copy.jpg"
              alt=""
            />
          </div>
          <h1 className='text-center bg-[url("https://i.ibb.co/1J2ZZ1MK/back-pic.jpg")] bg-no-repeat bg-cover text-5xl md:text-7xl lg:text-[150px] font-bold bg-clip-text text-transparent'>
            404 - Error
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl'>Page Not Found</h2>
          <button onClick={handleHome} className='btn bg-gray-800 text-white mt-5'>Return Home</button>
        </div>
      </div>
    );
};

export default ErrorPage;