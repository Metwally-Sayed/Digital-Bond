import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const done = (props: Props) => {
  return (
    <>
      <div className="md:px-[73px] md:py-[108px] flex items-center justify-center p-[25px] w-full h-screen">
        <motion.div
          drag
          whileDrag={{ scale: 1.3 }}
          className="bg-gray-200 h-[50%] w-[25%] flex items-center p-3 rounded-3xl shadow-2xl m-auto cursor-grabbing"
        >
          <h2 className="text-4xl text-center w-full">
            <span className="text-red-600 font-bold">Thank You.</span>
            <div className="mt-5 text-sm text-center">
              {' '}
              <p>We will Reach To you Soon After Reviewing It Carefully.</p>
            </div>
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default done;
