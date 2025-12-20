import React from "react";
import Lottie from "lottie-react";
import diceAnimationData from "../animations/dice 6.json";

const DiceLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center">
      <Lottie
        animationData={diceAnimationData}
        loop
        style={{ width: 120, height: 120 }}
      />
    </div>
  );
};

export default DiceLoader;

// loader which lookies like a rolling dice

// // default options for the animation
//   const defaultOptions = {
//     loop: true, // It should loop if it's a loader
//     autoplay: true,
//     animationData: diceAnimationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
