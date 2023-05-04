import { Button, Modal } from "flowbite-react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CustomModal = ({ show, onClose, onClick }) => {
  return (
    <React.Fragment>
      <Modal size="lg" dismissible={true} show={show} onClose={onClose}>
        <Modal.Header>Create Subject</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                className="font-[400] text-[16px] pb-1"
                htmlFor="Institution"
              >
                Institution
              </label>
              <div className="border border-gray-300 flex items-center">
                <select
                  name="Institution"
                  className="w-full outline-0 border-hidden focus:ring-0 py-[12px]"
                >
                  <option value="1">Select Institution</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[400] text-[16px] pb-1" htmlFor="Subject">
                Subject
              </label>
              <div className="border border-gray-300 flex items-center">
                <input
                  name="Subject"
                  placeholder="Subject"
                  type="text"
                  className="w-full outline-0 border-hidden focus:ring-0 py-[12px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[400] text-[16px] pb-1" htmlFor="Subject">
                Subject
              </label>
              <div className="border border-gray-300 flex items-center">
                <input
                  name="name"
                  placeholder="Enter name"
                  type="text"
                  className="w-full outline-0 border-hidden focus:ring-0 py-[12px]"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="flex gap-2 items-center hover:cursor-pointer justify-center py-3 border-dashed border-2 border-btnBlue font-[600] text-[16px] text-btnBlue">
                <AiOutlinePlus />
                <span>Add Subject</span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClick}>Save</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CustomModal;
