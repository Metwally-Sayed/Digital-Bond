import React from 'react';
import Head from '../components/Head';
import Svg from '../components/Svg';
import ImageCard from '../components/ImageCard';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const exploreHandler = (event: any) => {
    event.preventDefault();
    router.push('/contactus');
  };
  return (
    <>
      <Head />
      <div className=" py-16">
        <div
          className=" inset-x-0 top-0 hidden h-1/2  lg:block "
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8 ">
          <div className="lg:grid lg:grid-cols-12 ">
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -400 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 "
            >
              <div
                className=" inset-x-0 h-1/2  lg:hidden "
                aria-hidden="true"
              />
              {/* Image Card */}
              <ImageCard />
            </motion.div>
            {/* SVG */}
            <div className="relative bg-[#70707080] lg:col-span-10 lg:col-start-3 shadow-md lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <Svg />
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2
                  className="text-4xl font-bold tracking-tight text-white"
                  id="join-heading"
                >
                  Join our team
                </h2>
                <p className="text-lg text-white">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
                <button
                  type="button"
                  className=" transform block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-black shadow-md transition duration-500 hover:bg-black hover:text-white sm:inline-block sm:w-auto"
                  onClick={(e) => exploreHandler(e)}
                >
                  Join us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
