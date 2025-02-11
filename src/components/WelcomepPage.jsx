import React, { useState } from "react";
import NameForm from "./NameForm";
import BirthdayPage from "./BirthdayPage";

const WelcomePage = () => {
  const [name, setName] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameSubmit = (submittedName) => {
    if (submittedName.toLowerCase() === "monika") {
      setName(submittedName);
      setIsSubmitted(true);
      setErrorMessage("");
    } else {
      setErrorMessage("I don't think this is your name, be honest");
    }
  };

  const currentDate = new Date();
  const targetDate = new Date("2025-02-09T23:59:59");

  if (!isSubmitted) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <NameForm onSubmit={handleNameSubmit} errorMessage={errorMessage} />
      </div>
    );
  }

  if (currentDate < targetDate) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center mt-10 bg-white p-6 rounded-lg shadow-lg">
          Updates in progress, check back later.
        </div>
      </div>
    );
  }

  return <BirthdayPage name={name} />;
};

export default WelcomePage;
