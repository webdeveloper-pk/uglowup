import React, { useState } from "react";
import ContactStep1 from "./ContactStep1";
import ContactStep2 from "./ContactStep2";
import ContactStep3 from "./ContactStep3";
import ContactStep4 from "./ContactStep4";
import ContactStep5 from "./ContactStep5";
import ContactStep6 from "./ContactStep6";

const Contact = ({ selectedLanguage }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNextStep = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep + 1);
    }, 300);
  };

  const handleBackStep = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep - 1);
    }, 300);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue); // Update the value state
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail); // Update the value state
  };

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone); // Update the value state
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ContactStep1
            onNextStep={handleNextStep}
            selectedLanguage={selectedLanguage}
          />
        );
      case 2:
        return (
          <ContactStep5
            onNextStep={handleNextStep}
            onEmailChange={handleEmailChange}
            selectedLanguage={selectedLanguage}
          />
        );
      case 3:
        return (
          <ContactStep6
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
            email={email}
            onPhoneChange={handlePhoneChange}
            selectedLanguage={selectedLanguage}
          />
        );
      case 4:
        return (
          <ContactStep2
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
            email={email}
            phone={phone}
            onValueChange={handleValueChange}
            selectedLanguage={selectedLanguage}
          />
        );
      case 5:
        return (
          <ContactStep3
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
            email={email}
            phone={phone}
            value={value}
            selectedLanguage={selectedLanguage}
          />
        );
      case 6:
        return <ContactStep4 selectedLanguage={selectedLanguage} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default Contact;
