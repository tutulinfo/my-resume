import Image from "next/image";
import ContactInfo from "./ContactInfo";

const Header = () => {
  const contactInfo = [
    {
      src: "/assets/icons/mail-5-svgrepo-com.svg",
      alt: "email",
      href: "mailto:tutul.contact@gmail.com",
      text: "tutul.contact@gmail.com",
    },
    {
      src: "/assets/icons/mail-5-svgrepo-com.svg",
      alt: "email",
      href: "mailto:info.abdurrahman94@gmail.com",
      text: "info.abdurrahman94@gmail.com",
    },
    {
      src: "/assets/icons/whatsapp-128-svgrepo-com.svg",
      alt: "whatsapp",
      href: "https://wa.me/8801971549841",
      text: " +8801 971 549 841",
    },
    {
      src: "/assets/icons/linkedin-svgrepo-com.svg",
      alt: "linkedin",
      href: "https://www.linkedin.com/in/tutulinfo/",
      text: "linkedin.com/in/tutulinfo",
    },
    {
      src: "/assets/icons/github-142-svgrepo-com.svg",
      alt: "github",
      href: "https://github.com/tutulinfo",
      text: "github.com/tutulinfo",
    },
    {
      src: "/assets/icons/website-ui-web-svgrepo-com.svg",
      alt: "website",
      href: "https://www.srwebstudio.com",
      text: "www.srwebstudio.com",
    },
  ];

  return (
    <header className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-start md:items-start">
      <div className="w-full">
        <h1 className="font-bold text-3xl text-black">Abdur Rahman</h1>
        <h3 className="font-semibold text-base text-blue-500">Designation</h3>
        <p className="font-medium text-sm text-black">Experience</p>
        <div className="md:grid md:grid-cols-2 md:gap-2 space-y-2 md:space-y-0 mt-4">
          {contactInfo.map((item, index) => {
            return <ContactInfo key={index} contactInfo={item} />;
          })}
        </div>
      </div>
      {/* image src should be on public/assets/my-image.png */}
      <Image
        src="/assets/my-image.png"
        alt="Abdur Rahman"
        width={160}
        height={160}
        className="pb-4 md:pb-0"
      />
    </header>
  );
};

export default Header;
