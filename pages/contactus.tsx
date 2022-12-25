import React, { useRef } from 'react';
import Form from '../components/Form';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type Props = {};

const Contactus = (props: Props) => {
  const myRef = useRef(null);

  return (
    <div className="md:px-[73px] md:py-[108px] p-[25px] ">
      <div className="h-screen w-full m-auto">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-[60px] text-[30px] mb-5 w-full text-center font-bold text-[#23262B] ">
            Would you like to join our team?
            <br />
            <span className="text-[#ab0202e5]">Let’s talk!</span>
          </h1>
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 600, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className=" w-full mt-[190px] "
        >
          <Link to="form" spy={true} smooth={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" transform w-20 h-50 m-auto cursor-pointer transition duration-500 hover:text-[#ab0202e5]"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
      <Form />
    </div>
  );
};

export default Contactus;
