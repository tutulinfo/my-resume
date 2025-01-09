import Image from "next/image";

interface ExperinceDetails {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  points: string[];
}

interface Props {
  experinceDetails: ExperinceDetails;
  key: number;
}

const ExperinceCard = ({ experinceDetails, key }: Props) => {
  return (
    <div key={key} className="space-y-2 border-b border-gray-200 py-4">
      <h3 className="font-semibold text-base text-gray-700">
        {experinceDetails.title}
      </h3>
      <p className="font-semibold text-sm text-blue-500">
        {experinceDetails.company}
      </p>
      <div className="flex justify-start items-start space-x-4">
        <span className="flex justify-start items-center space-x-2">
          <Image
            src="/assets/icons/calendar-svgrepo-com.svg"
            alt="calendar"
            width={12}
            height={12}
          />
          <p className="font-normal text-xs text-gray-700">
            {experinceDetails.date}
          </p>
        </span>
        <span className="flex justify-start items-center space-x-2">
          <Image
            src="/assets/icons/location-svgrepo-com.svg"
            alt="location"
            width={12}
            height={12}
          />
          <p className="font-normal text-xs text-gray-700">
            {experinceDetails.location}
          </p>
        </span>
      </div>
      <div className="pl-5 space-y-2">
        <p className="font-bold text-xs text-gray-700">Description:</p>
        <p className="font-normal text-xs text-gray-700">
          {experinceDetails.description}
        </p>
        <ul className="font-normal text-xs text-gray-700 list-disc pl-4">
          {experinceDetails.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperinceCard;
