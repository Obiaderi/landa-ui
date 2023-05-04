import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

const CustomTable = () => {
  return (
    <div className="p-[20px] pb-[180px] border bottom-1 border-bgGrayBorder">
      <div className="w-full flex items-center mb-[40px]">
        <div className="w-[20%]">
          <select name="" id="">
            <option value="">University of Lagos</option>
          </select>
        </div>
        <div className="w-[65%] pr-3">
          <div className="w-full flex items-center gap-2 px-4 border ">
            <BiSearch className="w-[16px] h-[16px]" />
            <input
              type="text"
              placeholder="Search for Subject..."
              className="w-full border-none outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="w-[15%]">
          <button className="w-full bg-btnBlue text-white py-2 font-[600]">
            Add Subject
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Questions
              </th>
              <th scope="col" className="px-6 py-3">
                Participants
              </th>
              <th scope="col" className="px-6 py-3">
                Pass
              </th>
              <th scope="col" className="px-6 py-3">
                Failed
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Mathematics
              </th>
              <td className="px-6 py-4">123</td>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4">26%</td>
              <td className="px-6 py-4">74%</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium hover:underline">
                  <FiMoreVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Chemistry
              </th>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium hover:underline">
                  <FiMoreVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Chemistry
              </th>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium hover:underline">
                  <FiMoreVertical />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Chemistry
              </th>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium hover:underline">
                  <FiMoreVertical />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
