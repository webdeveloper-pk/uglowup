import React, { useState } from "react";

const ContactStep2 = ({
  onNextStep,
  onBackStep,
  email,
  phone,
  onValueChange,
  selectedLanguage,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue); // Call the prop function with the new value
  };

  const handleNextStep = (event) => {
    onNextStep(event);
  };

  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">
            {selectedLanguage === "eng" ? "contact us" : "Contactez-nous"}
          </h1>
        </div>
        <div class="mb-6 h-1 w-full bg-lighter-white">
          <div class="h-1 bg-light-green w-[75%]"></div>
          <p className="text-left uppercase mt-2 text-lighter-white">
            {selectedLanguage === "eng" ? "progress" : "progrès"}
          </p>
        </div>
        <div className="text-center mt-12">
          <p className="w-[100%] mx-auto text-base md:text-[20px] text-light-white">
            <span className="pr-6">3.</span>{" "}
            {selectedLanguage === "eng"
              ? "Before we get started, Let's give your message a subject line."
              : "Avant de commencer, donnons à votre message une ligne d'objet."}
            <span className="pl-2">*</span>
          </p>
          <p className="text-lighter-white text-xs md:text-sm mt-3 mb-8">
            {selectedLanguage === "eng"
              ? "In 100 characters or less, how can we best help you?"
              : "En 100 caractères ou moins, comment pouvons-nous vous aider au mieux ?"}
          </p>
        </div>
        <form className="mt-3">
          <input
            placeholder={
              selectedLanguage === "eng" ? "Start typing" : "commencer à écrire"
            }
            className="w-[100%] md:w-[350px] md:w-[400px] custom-input"
            value={value}
            onChange={handleChange}
          />
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-6">
            <button
              onClick={(event) => onBackStep(event)}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              {selectedLanguage === "eng" ? "back" : "dos"}
            </button>
            <button
              onClick={(event) => handleNextStep(event)}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              {selectedLanguage === "eng" ? "start" : "commencer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactStep2;
