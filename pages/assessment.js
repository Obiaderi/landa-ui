import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import CustomTable from "@/components/CustomTable";
import Layout from "@/components/Layout";
import React from "react";
import { FcGraduationCap } from "react-icons/fc";

const Assessment = () => {
  const [isActive, setIsActive] = React.useState({
    questionBank: true,
    assessments: false,
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleActive = (name) => {
    if (name === "questionBank") {
      setIsActive({
        questionBank: true,
        assessments: false,
      });
    } else {
      setIsActive({
        questionBank: false,
        assessments: true,
      });
    }
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="lg:mr-[120px]">
        <div className="flex items-center gap-2">
          <CustomButton
            title="Question Bank"
            className={isActive.questionBank ? "bg-bgGray" : "text-textGray"}
            onClick={() => handleActive("questionBank")}
          />
          <CustomButton
            title="Assessments"
            className={isActive.assessments ? "bg-bgGray" : "text-textGray"}
            onClick={() => handleActive("assessments")}
          />
        </div>
        {isActive.questionBank ? (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-[30px]">
              <div className=" bg-bgGray  p-[26px] rounded-full">
                <FcGraduationCap className="text-btnBlue" size={20} />
              </div>
              <span className="font-[400] text-[16px] text-textSlate ">
                Your subject question bank is empty.
              </span>
              <CustomButton
                title="Create Subject"
                onClick={handleModal}
                className="bg-btnBlue text-white hover:bg-white hover:text-btnBlue border border-btnBlue"
              />
            </div>
          </div>
        ) : (
          <div className="mt-[80px]">
            <CustomTable />
          </div>
        )}
      </div>
      <CustomModal show={isModalOpen} onClose={handleModalClose} />
    </Layout>
  );
};

export default Assessment;
