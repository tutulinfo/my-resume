const TechnicalSkills = () => {
  const skills = [
    {
      title: "# Frontend",
      items: ["React", "Angular", "Vue", "Bootstrap", "Material-UI"],
    },
    {
      title: "# Backend",
      items: [
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "Spring Boot",
        "ASP.NET Core",
      ],
    },
    {
      title: "# Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
      title: "# Tools",
      items: [
        "Git",
        "Docker",
        "Jenkins",
        "Jira",
        "Postman",
        "VS Code",
        "Eclipse",
        "IntelliJ IDEA",
      ],
    },
    {
      title: "# Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Heroku", "Netlify"],
    },
  ];
  return (
    <div>
      <h2 className="font-medium text-xl text-black border-b-4 border-black pb-1">
        Technical Skills
      </h2>
      {skills.map((item, i) => {
        return (
          <div key={i} className="space-y-2">
            <h4 className="font-bold text-xs text-gray-700 pt-2">
              {item.title}
            </h4>
            <ul className="text-xs italic list-inside text-gray-700 flex justify-start items-start flex-wrap">
              {item.items.map((index) => {
                return (
                  <li key={index} className="list-disc pr-3">
                    {index}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default TechnicalSkills;
