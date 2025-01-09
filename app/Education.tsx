import EducationCard from "./EducationCard";

const Education = () => {
  const edudationDetails = [
    {
      certificateName: "Bachelor of Business Administration",
      institutionName:
        "Tongi Govt. College under National University, Bangladesh",
      session: "2011-2019",
      location: "Gazipur, Bangladesh",
    },
    {
      certificateName: "Higher Secondary School Certificate",
      institutionName: "Safiuddin Sarker Academy & College - Dhaka Board",
      session: "2009-2011",
      location: "Gazipur, Bangladesh",
    },
    {
      certificateName: "Secondary School Certificate",
      institutionName: "Safiuddin Sarker Academy & College - Dhaka Board",
      session: "2007-2009",
      location: "Gazipur, Bangladesh",
    },
  ];
  return (
    <div>
      <h2 className="font-medium text-xl text-black border-b-4 border-black pb-1">
        Education
      </h2>
      {edudationDetails.map((item, index) => {
        return <EducationCard key={index} educationDetails={item} />;
      })}
    </div>
  );
};

export default Education;
