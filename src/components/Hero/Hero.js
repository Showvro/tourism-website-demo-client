import React from "react";

const Hero = () => {
  return (
    <section className="container border-b-2 border-t-2 mx-auto">
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-20 border-b-2 w-3/6 mx-auto pb-1 border-blue-300 text-blue-500 ">
            Esey Safe journey
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute w-full h-full object-cover object-center"
                  src="https://i.ibb.co/7RbfYXk/undraw-Travel-booking-re-6umu.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    EASY TO FIND
                  </h2>

                  <p className="leading-relaxed">
                    You can find your desired place easily by using our service.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://i.ibb.co/J2DNRJs/undraw-Travelers-re-y25a.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    SECURE CONTACT
                  </h2>

                  <p className="leading-relaxed">
                    The website you are watching now is easy to contact. We are
                    online all the time.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://i.ibb.co/cckP1Pc/undraw-campfire-s6y4.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    MOST COMFORTABLE
                  </h2>

                  <p className="leading-relaxed">
                    It will be the most enjoyable tour of you ever. We are
                    commiting you it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
