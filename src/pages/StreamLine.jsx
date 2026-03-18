import React from 'react';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { FaNetworkWired, FaUsersLine } from 'react-icons/fa6';

const StreamLine = () => {
    return (
      <div className="mx-10 mt-20 mb-40">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold">
            Streamlined Job Search Experience
          </h2>
          <p className="w-2/5 mx-auto">
            Discovering your dream job has never been simpler with our intuitive
            platform. Start your journey towards success now—don't delay!
          </p>
        </div>
        <div className="flex justify-center items-center  mt-15 mb-20">
          <div className="text-center space-y-4 md:border-r md:border-r-gray-300 md:p-10">
            <div className="border border-gray-200 shadow-2xl rounded-full h-16 w-16 flex justify-center items-center mx-auto">
              <FaNetworkWired size={40} />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Freelancer</h1>
              <p className="text-gray-500">
                Apply for positions as a freelancer and <br></br> take control
                of your career
              </p>
            </div>
          </div>
          <div className="text-center space-y-4 md:border-r md:border-r-gray-300 md:p-10">
            <div className="border border-gray-200 shadow-2xl rounded-full h-16 w-16 flex justify-center items-center mx-auto">
              <BsFillBagPlusFill size={40} />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Employer</h1>
              <p className="text-gray-500">
                Hire key staff as an employer and build <br /> your dream team
              </p>
            </div>
          </div>
          <div className="text-center space-y-4 md:p-10">
            <div className="border border-gray-200 shadow-2xl rounded-full h-16 w-16 flex justify-center items-center mx-auto">
              <FaUsersLine size={40} />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Community</h1>
              <p className="text-gray-500">
                Collaborate as a community and <br /> achieve more together
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StreamLine;