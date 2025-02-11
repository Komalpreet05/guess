import React, { useState, useEffect } from "react";

const images = [
  "/images/image1.png",
  "/images/image2.JPG",

  "/images/image4.JPG",
  "/images/image5.JPG",
  "/images/image6.png",
  "/images/image7.JPG",
  "/images/image8.png",
  "/images/image9.png",
  "/images/image10.JPG",
];

const BirthdayPage = ({ name }) => {
  const [showImages, setShowImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNote, setShowNote] = useState(false);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [showDeclineMessage, setShowDeclineMessage] = useState(false);
  const [declineCount, setDeclineCount] = useState(0);
  const [declineButtonPosition, setDeclineButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 3000); // Wait for 2 seconds before showing images
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showImages) {
      const slideshowTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex + 1 === images.length) {
            setShowNote(true);
            clearInterval(slideshowTimer);
            return prevIndex;
          }
          return (prevIndex + 1) % images.length;
        });
      }, 5000); // Change image every 15 seconds
      return () => clearInterval(slideshowTimer);
    }
  }, [showImages]);

  const handleAcceptClick = () => {
    setShowSpecialMessage(true);
    setShowDeclineMessage(false);
    setErrorMessage("");
  };

  const handleDeclineClick = () => {
    if (declineCount === 0) {
      setShowDeclineMessage(true);
      setShowSpecialMessage(false);
      setDeclineCount(declineCount + 1);
    } else {
      setErrorMessage("Accept it please");
    }
  };

  return (
    <div className="text-center bg-gradient-to-r from-yellow-100 to-pink-100 min-h-screen flex flex-col items-center justify-center p-4 relative">
      <h1
        className={`text-5xl font-bold mb-4 text-pink-600 ${
          showImages ? "fixed top-10 animate-slide-in" : "animate-slide-in"
        }`}
      >
        Happy Birthday, {name}!
      </h1>
      {showImages && !showNote && (
        <div className="mt-20 animate-fade-in flex justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`Slideshow Image ${currentImageIndex + 1}`}
            className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transform hover:scale-110 transition duration-300"
          />
        </div>
      )}
      {showNote && !showSpecialMessage && !showDeclineMessage && (
        <div className="mt-20 animate-fade-in flex flex-col items-center">
          <p className="text-2xl font-semibold text-pink-600 mb-4">
            I hope you have a fantastic birthday filled with joy and laughter.
            Enjoy your day and make sure to keep smiling!
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleAcceptClick}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Accept it
            </button>
            <button
              onClick={handleDeclineClick}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Decline it
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      )}
      {showSpecialMessage && (
        <div className="mt-20 animate-fade-in flex flex-col items-center">
          <p className="text-2xl font-semibold text-pink-600">
            Thanks for taking time out of your free schedule.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSz7bioH-_QOIntz8ju1pAKi_733m7CkHHXOi5RePGxJNlhnr7Zmhf4w97hZHuPlynEA&usqp=CAU" // Replace with an emoji image URL
            alt="Emoji"
            className="w-48 h-48 mt-4 p-2 rounded-full border-4 border-pink-600"
          />
        </div>
      )}
      {showDeclineMessage && (
        <div className="mt-20 animate-fade-in flex flex-col items-center">
          <p className="text-2xl font-semibold text-pink-600 mb-4">
            Oh no, {name}! I hope you reconsider your choice. You deserve all
            the happiness!
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleAcceptClick}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Accept it
            </button>
            <button
              onClick={handleDeclineClick}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Decline it
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;
