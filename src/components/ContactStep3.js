import React, { useState } from "react";

const ContactStep3 = ({ onNextStep, onBackStep }) => {
  const [checkboxValues, setCheckboxValues] = useState({
    agencyservice: false,
    vendors: false,
    media: false,
    career: false,
    metaliica: false,
    influencer: false,
    eCommerce: false,
    brand: false,
    other: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const getLabelStyle = (isChecked) => {
    return isChecked ? { backgroundColor: "#00ffb0", color: "black" } : {};
  };

  const getCheckboxStyle = (isChecked) => {
    return isChecked ? { backgroundColor: "white", borderColor: "black" } : {};
  };

  //   const handleButtonClick = () => {
  //     console.log(checkboxValues);
  //   };

  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">contact us</h1>
        </div>
        <p className="w-[100%] md:w-[90%] xl:w-[60%] mx-auto text-base md:text-[18px] text-light-white mb-6">
          <span className="pr-6">2.</span>What can we help you with?
          <span className="pl-4">*</span>
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4  xl:px-20">
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.agencyservice)}
            >
              <input
                type="checkbox"
                name="agencyservice"
                checked={checkboxValues.agencyservice}
                onChange={handleCheckboxChange}
                style={getCheckboxStyle(checkboxValues.agencyservice)}
                id="myCheckbox"
              />
              <span className="pl-3">Agency Services</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.vendors)}
            >
              <input
                type="checkbox"
                name="vendors"
                checked={checkboxValues.vendors}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Vendors & Partnerships</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.media)}
            >
              <input
                type="checkbox"
                name="media"
                checked={checkboxValues.media}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Media or Press</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.career)}
            >
              <input
                type="checkbox"
                name="career"
                checked={checkboxValues.career}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Career Opportunities</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.metaliica)}
            >
              <input
                type="checkbox"
                name="metaliica"
                checked={checkboxValues.metaliica}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">I love Metaliica</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.influencer)}
            >
              <input
                type="checkbox"
                name="influencer"
                checked={checkboxValues.influencer}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Influencer Services</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.eCommerce)}
            >
              <input
                type="checkbox"
                name="eCommerce"
                checked={checkboxValues.eCommerce}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">eCommerce / DT</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.brand)}
            >
              <input
                type="checkbox"
                name="brand"
                checked={checkboxValues.brand}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Personal Branding</span>
            </label>
            <label
              className="text-light-green border border-light-green p-3"
              style={getLabelStyle(checkboxValues.other)}
            >
              <input
                type="checkbox"
                name="other"
                checked={checkboxValues.other}
                onChange={handleCheckboxChange}
              />
              <span className="pl-3">Other</span>
            </label>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-6 ">
            <button
              onClick={onBackStep}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              back
            </button>
            <button
              onClick={onNextStep}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactStep3;
