import React, { useState } from "react";
import styled from "styled-components";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Prayer Info Card */}
      <StyledWrapper>
        <div className="card">
          <p className="card-title font-heading">Prayer Requests</p>
          <p className="small-desc font-body">
            We believe in the power of prayer and the comfort it brings. 
            If you're facing a challenge, seeking guidance, or simply need 
            someone to stand with you in faith, we invite you to share your 
            prayer request with us. No matter how big or small, your concerns
            matter to God—and to us. Our prayer team is here to lift you up and 
            walk with you in hope and love.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </StyledWrapper>

      {/* Location Section */}
      <div className="mt-10 text-center px-4">
        <h1
          className="font-heading font-bold text-3xl 
          bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 
          bg-clip-text text-transparent text-center mx-auto w-fit "
        >
          📍 YSM Church's Location
        </h1>

        <a
          href="https://maps.app.goo.gl/oJjHcPHrufx9AAc77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform transform hover:scale-105 pt-10 pb-20"
        >
          <img
            src="/location.png"
            alt="YSM Church Location"
            className="w-[1000px] sm:w-96 md:w-[1400px] rounded-lg shadow-lg border-2 border-white"
          />
        </a>
      </div>

      {/* Contact Section with Tooltip + Prayer Form */}
      <div className="flex flex-col gap-10 pb-20 px-4">
        <h1 className="text-white text-2xl font-heading font-extrabold text-center ">
          CONTACT FOR PRAYER REQUEST :-
        </h1>

        {/* Prayer Request Form */}
        <div className="flex justify-center items-center px-2 mt-8">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-[2px] rounded-xl shadow-xl w-full max-w-lg"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-heading text-center mb-6 text-gray-800 dark:text-white">
                Send Your Prayer Request
              </h2>

              <div className="flex flex-col gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 text-gray-800 dark:text-gray-200 focus:border-pink-500 outline-none"
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-pink-600">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 text-gray-800 dark:text-gray-200 focus:border-pink-500 outline-none"
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-pink-600">
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows="4"
                    className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 text-gray-800 dark:text-gray-200 focus:border-pink-500 outline-none resize-none"
                  ></textarea>
                  <label className="absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-pink-600">
                    Your Prayer Request
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Send Request
                </button>

                {submitted && (
                  <p className="text-green-500 text-center font-semibold mt-2">
                    ✅ Your prayer request has been sent!
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 0 1rem;

  .card {
    position: relative;
    width: 100%;
    max-width: 600px;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    border-radius: 10px;
    padding: 2em 1.5em;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .card-title {
    color: #262626;
    font-size: 1.5em;
    text-align: center;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.6em;
    color: #452c2c;
    text-align: justify;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    color: white;
    font-family: courier, sans-serif;
  }

  .card:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(41);
  }

  .card:hover .small-desc {
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    color: #ffffff;
  }
`;

export default Contact;
