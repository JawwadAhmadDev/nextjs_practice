"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className="bg-blue-500 text-white text-2xl p-3 mx-2 mt-2"
        onClick={handleClick}
      >
        <p>Adobe Creative Cloud</p>
      </div>

      <div className={` overflow-hidden duration-300 ${show ? "max-h-48" : "max-h-0"}`}>
        <p className="bg-blue-800 text-white p-3 mx-2">
          Adobe Creative Cloud has an FAQ page with a search bar at the top and
          a disclaimer that the content applies to the 2018 version of Creative
          Cloud. The best part is that you never have to link away from the
          original page. Every topic is linked at the top within larger
          sections. If you scroll down, you can read each question within each
          topic and click on the arrow to read the answer.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
