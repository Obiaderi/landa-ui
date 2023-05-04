import { Dropdown } from "flowbite-react";
import React from "react";

const CustomDropdown = () => {
  return (
    <>
      <Dropdown.Item>View Questions</Dropdown.Item>
      <Dropdown.Item>Add Questions</Dropdown.Item>
      <Dropdown.Item>Delete</Dropdown.Item>
    </>
  );
};

export default CustomDropdown;
