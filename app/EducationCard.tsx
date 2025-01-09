import Image from "next/image";

interface EducationDetails {
  certificateName: string;
  institutionName: string;
  session: string;
  location: string;
}

interface Props {
  educationDetails: EducationDetails;
  key: number;
}

const EducationCard = ({ educationDetails, key }: Props) => {
  return (
    <div key={key} className="space-y-2 border-b border-gray-200 py-4">
      <h3 className="font-semibold text-base text-gray-700">
        {educationDetails.certificateName}
      </h3>
      <p className="font-semibold text-sm text-blue-500">
        {educationDetails.institutionName}
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
            {educationDetails.session}
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
            {educationDetails.location}
          </p>
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
