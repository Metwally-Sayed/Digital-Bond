import React, { useState } from 'react';
import { classNames } from '../functions';

type Props = {
  maritalStatusValueHandle: (a: string) => void;
};

const MaritalStatus = ({ maritalStatusValueHandle }: Props) => {
  const [status, setStatus] = useState([
    { id: 1, title: 'Finished', current: false },
    { id: 2, title: 'Excused', current: false },
    { id: 3, title: 'Under Graduation', current: false },
  ]);

  const selectHandler = (title: string) => {
    const selected = status.map((status) =>
      status.title === title
        ? { ...status, current: true }
        : { ...status, current: false },
    );
    setStatus(selected);

    selected.map((item) => {
      if (item.current === true) {
        maritalStatusValueHandle(item.title);
      }
    });
  };

  return (
    <>
      <div className="mb-[9px]">
        <p>
          Marital Status <span className="text-red-600"> *</span>
        </p>
      </div>
      <div className="flex flex-wrap lg:w-[60%] ">
        {status.map((statue, idx) => {
          return (
            <div
              onClick={() => selectHandler(statue.title)}
              key={idx}
              className={classNames(
                statue.current === true ? 'bg-[#ab0202e5] text-white' : '',
                'inline-flex h-[48px] my-3 items-center w-auto border text-base font-medium rounded-[63.5417px] shadow-sm text-[#23262B] border-[#ab0202e5] ml-[13px] cursor-pointer transform  transition duration-500 hover:bg-[#ab0202e5] ',
              )}
            >
              <p className="w-full capitalize text-[14px] font-semibold text-center py-[11px] px-[41px]">
                {statue.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MaritalStatus;
