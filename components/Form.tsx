/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import MaritalStatus from './MaritalStatus';
import logo from '../images/arrow.svg';
import Image from 'next/image';
import { useFormik } from 'formik';
import { validationSchema } from '../validationSchema';
import Unclickable from './Unclickable';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

let maritalStatusValue: string = '';

const maritalStatusValueHandle = (value: string) => {
  maritalStatusValue = value;
};

const Form = () => {
  const router = useRouter();
  const [serviceValidation, setServiceValidation] = useState(true);
  const [budgetValidation, setbudgetValidation] = useState(true);
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(!checked);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      position: '',
      attachment: '',
      availacilityDate: '',
      expectedSalary: '',
      dateOfBirth: '',
      address: '',
      maritalStatus: '',
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      const dataForm = { ...values, maritalStatus: maritalStatusValue };
      console.log(dataForm);

      router.push('/done');
    },
  });

  return (
    <>
      <form className="flex w-full flex-col h-screen" id="form">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="flex flex-col lg:mr-3 mr-0">
            <label className="mb-2" htmlFor="">
              Full name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.fullName && formik.touched.fullName
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. Ahmed Nazzal"
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:ml-3 ">
            <label className="mb-2" htmlFor="">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. hello@layouti.me
            "
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="mt-[14px] flex lg:flex-row flex-col">
          <div className="flex flex-col lg:mr-6 ">
            <label className="mb-2" htmlFor="">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="phoneNumber"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. +201202000057
            "
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.address && formik.touched.address
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. 161-Your-Address"
            />
            {formik.errors.address && formik.touched.address && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.address}
              </p>
            )}
          </div>
        </div>
        <div className="mt-[14px] flex lg:flex-row flex-col">
          <div className="flex flex-col lg:mr-6 ">
            <label className="mb-2" htmlFor="">
              Birth day <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.dateOfBirth && formik.touched.dateOfBirth
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.dateOfBirth}
              </p>
            )}
          </div>
        </div>
        <div className="mt-[14px] flex lg:flex-row flex-col ">
          <div className="flex flex-col  ">
            <label className="mb-2" htmlFor="">
              Position <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.position && formik.touched.position
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. Front-End Web Developer"
            />
            {formik.errors.position && formik.touched.position && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.position}
              </p>
            )}
          </div>
          <div className=" lg:ml-5 flex flex-col mt-3 lg:mt-0">
            <label className="mb-2">
              Expected Salary <span className="text-red-600"> *</span>
            </label>
            <input
              id="expectedSalary"
              value={formik.values.expectedSalary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.expectedSalary && formik.touched.expectedSalary
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. $1000"
            />
            {formik.errors.expectedSalary && formik.touched.expectedSalary && (
              <p className="text-red-500 text-xs p-0 m-0">
                {formik.errors.expectedSalary}
              </p>
            )}
          </div>
          <div className=" lg:ml-5 flex flex-col mt-3 lg:mt-0">
            <label className="mb-2">
              Availacility Date <span className="text-red-600"> *</span>
            </label>
            <input
              id="availacilityDate"
              type="date"
              value={formik.values.availacilityDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.availacilityDate &&
                formik.touched.availacilityDate
                  ? 'border-red-600 bg-red-200 mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
                  : 'border-[#CDD0DB] mb-3 border border-transparent h-[61px] md:w-[426px] w-[220] py-[15px] pl-[30px] rounded-full'
              }
              placeholder="e.g. $1000"
            />
            {formik.errors.availacilityDate &&
              formik.touched.availacilityDate && (
                <p className="text-red-500 text-xs p-0 m-0">
                  {formik.errors.availacilityDate}
                </p>
              )}
          </div>
        </div>

        <div className="mt-[39px] mb-[10px] flex flex-col">
          <label className="font-normal text-[20px] h-[37px]">
            Attachment <span className="text-red-600"> *</span>
          </label>
          <input
            id="attachment"
            // value={formik.values.attachment}
            onChange={(e) => {
              console.log(e.currentTarget.files![0]);
              return formik.setFieldValue(
                'attachment',
                e.currentTarget.files![0],
              );
            }}
            onBlur={formik.handleBlur}
            className={
              formik.errors.attachment && formik.touched.attachment
                ? ' px-[30px] py-[15px]  bg-red-200 border-red-600 border border-transparent h-[61px] lg:w-[872px] md:w-[560px] rounded-[30px]'
                : ' px-[30px] py-[15px] border-[#CDD0DB] border border-transparent h-[61px] lg:w-[872px] md:w-[560px] rounded-[30px]'
            }
            placeholder="Attachment here"
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx"
          />
          {formik.errors.attachment && formik.touched.attachment && (
            <p className="text-red-500 text-xs p-0 m-0">
              {formik.errors.attachment}
            </p>
          )}
          <p className="mt-[10px] text-[#B1B6C9]">
            Only PDF and Doc. with max. size of 10MB
          </p>
        </div>
        <div className="mt-[14px]">
          <MaritalStatus maritalStatusValueHandle={maritalStatusValueHandle} />
          {budgetValidation ? null : (
            <p className="text-red-500 text-xs p-0 m-0">
              Please select a budget
            </p>
          )}
        </div>
        <div className="mt-[40px]">
          <input
            onClick={checkHandler}
            className="h-[61px] w-[61px] rounded-[15px] border-gray-300 text-[#ab0202e5] focus:ring-[#42bf6300] mr-[30px]"
            type="checkbox"
          />
          <label htmlFor="test">
            I accept your
            <span className="text-[#ab0202e5] ml-1 underline decoration-1 cursor-pointer">
              {' '}
              Privacy Policy
            </span>
            <span className="text-red-600"> *</span>
          </label>
        </div>
        <div className="mt-[40px]">
          {!checked ? (
            <Unclickable />
          ) : (
            <button
              type="button"
              onClick={() => formik.handleSubmit()}
              className="h-[62px] px-[30px] py-[13px] w-[258px] border border-transparent text-base font-medium rounded-[63.5417px] shadow-sm text-white bg-[#ab0202e5]"
            >
              <div className="flex w-full justify-between">
                <span className="w-[150px] h-[33px] leading-8 text-[17px]">
                  Send
                </span>
                <motion.span
                  whileHover={{ x: 400 }}
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="leading-8 pt-3 h-full block"
                >
                  <Image src={logo} alt={'arrow'} />
                </motion.span>
              </div>
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
