import React, { useState, useEffect } from "react";
import NameForm from "./NameForm";
import BirthdayPage from "./BirthdayPage";

const WelcomePage = () => {
  const [name, setName] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  const handleNameSubmit = (submittedName) => {
    if (submittedName.toLowerCase() === "monika") {
      setName(submittedName);
      setIsSubmitted(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Cheater, I asked your name, be honest");
    }
  };

  const currentDate = new Date();
  const targetDate = new Date("2025-02-10T23:59:59");
  const unavailableDate = new Date("2025-02-12T23:59:59");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining("Time is up!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

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
          <div className="mt-4 text-lg text-gray-700">
            Time remaining: {timeRemaining}
          </div>
        </div>
      </div>
    );
  }

  if (currentDate > unavailableDate) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center mt-10 bg-white p-6 rounded-lg shadow-lg">
          Hope you enjoyed it, Don't forget to Check out next year.
        </div>
      </div>
    );
  }

  return <BirthdayPage name={name} />;
};

export default WelcomePage;
