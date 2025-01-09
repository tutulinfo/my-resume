import React from "react";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <title>Abdur Rahman&#39;s Resume</title>
      </head>
      <body className="bg-gray-900 p-2 md:p-4 max-w-5xl mx-auto">
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
