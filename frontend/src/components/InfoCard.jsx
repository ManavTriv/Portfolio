import { useState } from "react";
import PropTypes from "prop-types";

const InfoCard = ({ content }) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    const randomRotation = Math.random() < 0.5 ? -1 : 1;
    setRotation(randomRotation);
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setRotation(0);
    setIsHovered(false);
  };

  return (
    <div
      className="group md:w-[30%] w-80 h-100 bg-[#F7F7F7] rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      style={{
        transform: `rotate(${rotation}deg) ${
          isHovered ? "scale(1.02)" : "scale(1)"
        }`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-[#FBFBFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      <div className="relative z-10 p-4">{content}</div>
    </div>
  );
};

InfoCard.propTypes = {
  content: PropTypes.node.isRequired,
};

export default InfoCard;
