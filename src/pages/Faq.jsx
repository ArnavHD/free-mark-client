import React from 'react';

const Faq = () => {
    return (
      <div className="mx-10 flex justify-between bg-gray-100/60 p-10 rounded-xl items-center mt-20 mb-20">
        <div className="space-y-3 w-1/2">
          <h4 className="text-xm text-">Talk to Support</h4>
          <h2 className="font-bold text-3xl">Frequently asked Questions</h2>
          <h5 className="text-xl text-gray-500 w-3/4">
            Find answers to your questions instantly. Need more guidance? Dive
            into our extensive documentation for all your queries.
          </h5>
          <button className="btn bg-purple-900 text-white">
            Contact Our Team
          </button>
        </div>
        <div className="space-y-2.5 w-1/2">
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              <h2 className="text-xl">How do I create an account?</h2>
            </div>
            <div className="collapse-content text-xm text-gray-500">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-xl">
                I forgot my password. What should I do?
              </h2>
            </div>
            <div className="collapse-content text-xm text-gray-500">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-xl">
                How do I update my profile information?
              </h2>
            </div>
            <div className="collapse-content text-xm text-gray-500">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-xl">How do I ensure payment security?</h2>
            </div>
            <div className="collapse-content text-xm text-gray-500">
              Use our secure payment system. Funds are held in escrow until you
              complete the project and both parties are satisfied.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-200/50 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              <h2 className="text-xl">How do We Work</h2>
            </div>
            <div className="collapse-content text-xm text-gray-500">
              We have specialized AI algorithm to cope with the extreme pressure of work and manage crown in the webstie which cause a great advantage.
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;