const SoftSkills = () => {
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Creativity",
    "Work Ethic",
    "Adaptability",
    "Interpersonal Skills",
    "Time Management",
    "Leadership",
    "Attention to Detail",
  ];
  return (
    <div>
      <h2 className="font-medium text-xl text-black border-b-4 border-black pb-1 mb-4">
        Soft Skills
      </h2>
      <ul className="text-xs italic list-inside text-gray-700 flex justify-start items-start flex-wrap">
        {softSkills.map((i) => {
          return (
            <li key={i} className="list-disc pr-3">
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SoftSkills;
