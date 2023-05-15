import React, { useState } from "react";
import ContactStep1 from "./ContactStep1";
import ContactStep2 from "./ContactStep2";
import ContactStep3 from "./ContactStep3";
import ContactStep4 from "./ContactStep4";

// import "antd/dist/antd.css";

// import { Checkbox } from "antd";

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <ContactStep1 onNextStep={handleNextStep} />;
      case 2:
        return <ContactStep2 onNextStep={handleNextStep} />;
      case 3:
        return (
          <ContactStep3
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
          />
        );
      case 4:
        return <ContactStep4 />;
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
