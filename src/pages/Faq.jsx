import React from 'react';

const Faq = () => {
    return (
      <div className="mx-4 md:mx-10 flex lg:flex-row flex-col justify-between bg-gray-100/60  p-4 md:p-10 rounded-xl items-center lg:mt-20 lg:mb-20 mt-10 mb-10 space-y-5">
        <div className="space-y-3 lg:w-1/2">
          <h4 className="text-xm text-">Talk to Support</h4>
          <h2 className="font-bold text-2xl md:text-3xl">Frequently asked Questions</h2>
          <h5 className="text-xm md:text-xl text-gray-500 md:w-3/4">
            Find answers to your questions instantly. Need more guidance? Dive
            into our extensive documentation for all your queries.
          </h5>
          <button className="btn bg-purple-900 text-white">
            Contact Our Team
          </button>
        </div>
        <div className="space-y-2.5 lg:w-1/2">
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              <h2 className="text-base md:text-xl">How do I create an account?</h2>
            </div>
            <div className="text-sm collapse-content md:text-xm text-gray-500">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-base md:text-xl">
                I forgot my password. What should I do?
              </h2>
            </div>
            <div className="collapse-content text-sm md:text-xm text-gray-500">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-base md:text-xl">
                How do I update my profile information?
              </h2>
            </div>
            <div className="text-sm collapse-content md:text-xm text-gray-500">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-base md:text-xl">How do I ensure payment security?</h2>
            </div>
            <div className="text-sm collapse-content ms:text-xm text-gray-500">
              Use our secure payment system. Funds are held in escrow until you
              complete the project and both parties are satisfied.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-base  md:text-xl">How do we work?</h2>
            </div>
            <div className="text-sm collapse-content md:text-xm text-gray-500">
              We have specialized AI algorithm to cope with the extreme pressure of work and manage crown in the webstie which cause a great advantage.
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;