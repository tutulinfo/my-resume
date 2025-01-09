import ExperinceCard from "./ExperinceCard";

// interface ExperinceDetails {
//   title: string;
//   company: string;
//   location: string;
//   date: string;
//   description: string;
//   points: string[];
// }

const Experince = () => {
  const experienceDetails = [
    {
      title: "UI/UX Designer",
      company: "Rebelslab BV",
      location: "Netherland - Remote",
      date: "November 2022 - Present",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum debitis soluta nisi consequatur tempore! Iusto, rerum sapiente. Corporis sint, quia fugiat ratione maxime exercitationem fugit minus atque. Officia, id?",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    {
      title: "UI/UX Designer",
      company: "ABC Company",
      location: "XYZ - Remote",
      date: "April 2024 - Present",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum debitis soluta nisi consequatur tempore! Iusto, rerum sapiente. Corporis sint, quia fugiat ratione maxime exercitationem fugit minus atque. Officia, id?",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    {
      title: "Web Designer & Trainee Fontend Developer",
      company: "SR Web Studio",
      location: "Bangladesh - In Office",
      date: "January 2022 - Present",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum debitis soluta nisi consequatur tempore! Iusto, rerum sapiente. Corporis sint, quia fugiat ratione maxime exercitationem fugit minus atque. Officia, id?",
      points: ["Point 1", "Point 2", "Point 3"],
    },
  ];

  //  as ExperinceDetails[];
  return (
    <div className="mt-4 md:mt-0">
      <h2 className="font-medium text-xl text-black border-b-4 border-black pb-1">
        Experience
      </h2>
      {experienceDetails.map((item, index) => {
        return <ExperinceCard experinceDetails={item} key={index} />;
      })}
    </div>
  );
};

export default Experince;
