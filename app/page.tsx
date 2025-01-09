import Education from "./Education";
import Experince from "./Experince";
import Button from "./components/Global/Button";
import Header from "./Header";
import SoftSkills from "./SoftSkills";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";

const ResumePage = () => {
  return (
    <>
      <Button label="Download PDF" />
      <div className="bg-white p-3 md:p-6 border border-gray-200 rounded-md mt-4">
        <Header />
        <div className="flex flex-col-reverse md:flex-row md:justify-start md:items-start md:space-x-6 mt-4 md:mt-6">
          <div className="w-full md:w-2/3 space-y-4">
            <Experince />
            <Education />
          </div>
          <div className="w-full md:w-1/3 space-y-2">
            <Summary />
            <TechnicalSkills />
            <SoftSkills />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
