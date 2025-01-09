import Image from "next/image";

interface ContactInfo {
  src: string;
  alt: string;
  href: string;
  text: string;
}
interface Props {
  contactInfo: ContactInfo;
  key: number;
}
const ContactInfo = ({ contactInfo, key }: Props) => {
  return (
    <div key={key} className="flex justify-start items-center">
      <Image
        src={contactInfo.src}
        alt={contactInfo.alt}
        width={16}
        height={16}
        className="w-5 h-auto "
      />
      <a
        href={contactInfo.href}
        className="ml-2 font-normal text-xs text-[#111]"
      >
        {contactInfo.text}
      </a>
    </div>
  );
};

export default ContactInfo;
